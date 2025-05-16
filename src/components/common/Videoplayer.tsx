"use client";
import React, { useEffect, useRef } from "react";
import videojs from "video.js";
import type Player from "video.js/dist/types/player";
import "./videojs.min.css";

let activePlayer: Player | null = null; // Global reference to track active player

const VideoPlayer = ({ url, poster }: { url: string; poster?: string }) => {
  const videoRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<Player | null>(null);

  useEffect(() => {
    if (!playerRef.current) {
      const videoElement = document.createElement("video-js");

      videoElement.classList.add("video-js", "vjs-theme-sea");

      videoRef.current?.appendChild(videoElement);

      playerRef.current = videojs(
        videoElement,
        {
          poster: poster,
          controls: true,
          preload: "auto",
          muted: false,
          responsive: true,
          fluid: true,
          sources: [{ src: url, type: "application/x-mpegURL" }],
        },
        function () {
          const player = this;
          player.on("play", () => {
            if (activePlayer && activePlayer !== player) {
              activePlayer.pause(); // Pause previously playing video
            }
            activePlayer = player; // Set the current active player
          });
        }
      );
    } else {
      playerRef.current.src({ type: "application/x-mpegURL", src: url });
      if (poster) {
        playerRef.current.poster(poster);
      }
    }

    return () => {
      if (playerRef.current) {
        playerRef.current.dispose();
        playerRef.current = null;
        if (activePlayer === playerRef.current) {
          activePlayer = null; // Reset active player if disposed
        }
      }
    };
  }, [url, poster]);

  return <div id="video-player" ref={videoRef} />;
};

export default VideoPlayer;
