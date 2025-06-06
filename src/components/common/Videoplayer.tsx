"use client";
import React, { useEffect, useRef, useCallback } from "react";
import videojs from "video.js";
import "@videojs/http-streaming";
import type Player from "video.js/dist/types/player";
import "./videojs.min.css";

// Global reference to track active player
let activePlayer: Player | null = null;

interface VideoPlayerProps {
  url: string;
  poster?: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ url, poster }) => {
  const videoRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<Player | null>(null);

  // Memoized cleanup function
  const cleanup = useCallback(() => {
    if (playerRef.current) {
      try {
        playerRef.current.dispose();
      } catch (error) {
        console.warn("Error disposing player:", error);
      }
      playerRef.current = null;
      if (activePlayer === playerRef.current) {
        activePlayer = null;
      }
    }
  }, []);

  // Memoized player initialization
  const initializePlayer = useCallback(() => {
    if (!videoRef.current) return;

    const videoElement = document.createElement("video-js");
    videoElement.classList.add("video-js", "vjs-theme-sea");
    videoRef.current.appendChild(videoElement);

    playerRef.current = videojs(
      videoElement,
      {
        poster: poster,
        controls: true,
        preload: "none", // Most optimal for HLS streaming
        muted: false,
        responsive: true,
        fluid: true,
        sources: [{ src: url, type: "application/x-mpegURL" }],
        html5: {
          hls: {
            enableLowInitialPlaylist: true,
            smoothQualityChange: true,
            overrideNative: true,
            withCredentials: false,
            handleManifestRedirects: true,
            // Optimize segment loading
            maxPlaylistRetries: 2,
            experimentalBufferBasedABR: true,
          } as any, // Type assertion to avoid TS errors with experimental options
        },
        liveui: true,
        playbackRates: [0.5, 1, 1.25, 1.5, 2],
        // Performance optimizations
        techOrder: ["html5"],
        preferFullWindow: false,
        suppressNotSupportedError: true,
      },
      function (this: Player) {
        const player = this;

        // Optimized ready handler
        player.ready(() => {
          const tech = player.tech(true) as any;

          if (tech?.hls) {
            // Optimize initial bandwidth estimation
            tech.hls.bandwidth = 1500000; // Start with 1.5 Mbps

            // Set up efficient event listeners
            const eventListeners = {
              loadstart: () => console.log("HLS: Load started"),
              canplay: () => console.log("HLS: Can play"),
              progress: () => {
                const buffered = player.buffered();
                if (buffered.length > 0) {
                  const currentTime = player.currentTime() || 0;
                  const bufferedEnd = buffered.end(buffered.length - 1);
                  const bufferHealth = bufferedEnd - currentTime;
                  console.log(
                    `HLS: Buffer health: ${bufferHealth.toFixed(2)}s`
                  );
                }
              },
            };

            // Add event listeners efficiently
            Object.entries(eventListeners).forEach(([event, handler]) => {
              player.one(event, handler); // Use 'one' for initial events
            });

            // Bandwidth monitoring (throttled)
            let lastBandwidthLog = 0;
            tech.hls.on?.("bandwidthupdate", () => {
              const now = Date.now();
              if (now - lastBandwidthLog > 5000) {
                // Log every 5 seconds max
                console.log("Bandwidth:", tech.hls.bandwidth);
                lastBandwidthLog = now;
              }
            });
          }
        });

        // Optimized play handler with debouncing
        let playTimeout: NodeJS.Timeout;
        player.on("play", () => {
          clearTimeout(playTimeout);
          playTimeout = setTimeout(() => {
            if (activePlayer && activePlayer !== player) {
              activePlayer.pause();
            }
            activePlayer = player;
          }, 100); // Small delay to prevent rapid switching
        });

        // Enhanced error handling
        player.on("error", (error: any) => {
          const playerError = player.error();
          if (playerError) {
            console.error("Video.js error:", {
              code: playerError.code,
              message: playerError.message,
            });

            // Auto-retry for network errors
            if (playerError.code === 2) {
              // MEDIA_ERR_NETWORK
              setTimeout(() => {
                console.log("Attempting to reload video...");
                player.load();
              }, 3000);
            }
          }
        });

        // Memory cleanup on pause (for long playlists)
        player.on("pause", () => {
          setTimeout(() => {
            if (player.paused()) {
              const tech = player.tech(true) as any;
              if (tech?.hls && typeof tech.hls.cleanupBuffer === "function") {
                tech.hls.cleanupBuffer();
              }
            }
          }, 30000); // Cleanup after 30 seconds of being paused
        });
      }
    );
  }, [url, poster]);

  useEffect(() => {
    if (!playerRef.current) {
      initializePlayer();
    } else {
      // Efficiently update existing player
      try {
        playerRef.current.src([{ type: "application/x-mpegURL", src: url }]);
        if (poster) {
          playerRef.current.poster(poster);
        }
      } catch (error) {
        console.warn("Error updating player source:", error);
        // Reinitialize if update fails
        cleanup();
        initializePlayer();
      }
    }

    // Cleanup function
    return cleanup;
  }, [url, poster, initializePlayer, cleanup]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      cleanup();
    };
  }, [cleanup]);

  return <div ref={videoRef} />;
};

export default VideoPlayer;
