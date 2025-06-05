"use client";
import React, { MouseEventHandler } from "react";

import { HOMEPAGE } from "@/config/data";
import { getLoginStatus } from "@/lib/utils";
import useAuthRedirect from "@/hooks/useAuthRedirect";
import classes from "./home-section.module.css";
import { useRouter } from "next/navigation";
import HeaderSpacing from "@/components/common/header-spacing";

const HomePage = () => {
  const router = useRouter();
  useAuthRedirect(getLoginStatus);
  return (
    <div className="w-full relative mobile-vh overflow-hidden flex flex-col no-scroll-x">
      <HeaderSpacing />
      {/* Animated Background */}
      <div
        className={`absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 ${classes.wrapper}`}
      ></div>

      {/* Main Content */}
      <div className="relative z-10 flex-1 flex flex-col">
        <div className="flex-1 flex items-center py-4 sm:py-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col items-start text-left space-y-4 sm:space-y-6 lg:space-y-8">
                {/* Content Section */}
                <div className="max-w-2xl space-y-3 sm:space-y-4 lg:space-y-6">
                  {/* Badge/Title */}
                  <div className="inline-flex items-center pr-3 sm:pr-4 py-1 sm:py-2 backdrop-blur-sm  text-lg font-medium text-white animate-fade-in md:text-lg">
                    {HOMEPAGE.title}
                  </div>

                  {/* Main Heading */}
                  <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight animate-fade-in-up delay-200">
                    <span className="bg-gradient-to-r from-white via-white to-gray-300 bg-clip-text text-transparent">
                      {HOMEPAGE.description1}
                    </span>
                  </h1>

                  {/* Description */}
                  <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-300 leading-relaxed max-w-xl animate-fade-in-up delay-400">
                    {HOMEPAGE.description2}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Button Section */}
        <div className="relative pb-4 sm:pb-8 lg:pb-14">
          <div className="flex flex-col items-center space-y-2 sm:space-y-4">
            <div className="animate-fade-in-up delay-800">
              <div className="flex sm:hidden touch-target items-center justify-center">
                <CircularSVGButton
                  onClick={() => router.push("/#section-1")}
                  height={70}
                  width={70}
                />
              </div>
              <div className="hidden sm:flex lg:hidden touch-target items-center justify-center">
                <CircularSVGButton
                  onClick={() => router.push("/#section-1")}
                  height={90}
                  width={90}
                />
              </div>
              <div className="hidden lg:flex touch-target items-center justify-center">
                <CircularSVGButton
                  onClick={() => router.push("/#section-1")}
                  height={100}
                  width={100}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* Mobile viewport height fixes */
        @supports (-webkit-touch-callout: none) {
          .mobile-vh {
            height: -webkit-fill-available;
            min-height: -webkit-fill-available;
          }
        }

        @-webkit-keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @-webkit-keyframes fade-in-up {
          from {
            opacity: 0;
            -webkit-transform: translateY(30px);
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            -webkit-transform: translateY(0);
            transform: translateY(0);
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @-webkit-keyframes spin-slow {
          from {
            -webkit-transform: rotate(0deg);
          }
          to {
            -webkit-transform: rotate(360deg);
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @-webkit-keyframes spin-slow-reverse {
          from {
            -webkit-transform: rotate(360deg);
          }
          to {
            -webkit-transform: rotate(0deg);
          }
        }

        @keyframes spin-slow-reverse {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }

        .animate-fade-in {
          -webkit-animation: fade-in 1s ease-out;
          animation: fade-in 1s ease-out;
        }

        .animate-fade-in-up {
          -webkit-animation: fade-in-up 1s ease-out;
          animation: fade-in-up 1s ease-out;
        }

        .delay-200 {
          -webkit-animation-delay: 0.2s;
          animation-delay: 0.2s;
        }

        .delay-400 {
          -webkit-animation-delay: 0.4s;
          animation-delay: 0.4s;
        }

        .delay-600 {
          -webkit-animation-delay: 0.6s;
          animation-delay: 0.6s;
        }

        .delay-800 {
          -webkit-animation-delay: 0.8s;
          animation-delay: 0.8s;
        }

        .animate-spin-slow {
          -webkit-animation: spin-slow 20s linear infinite;
          animation: spin-slow 20s linear infinite;
        }

        .animate-spin-slow-reverse {
          -webkit-animation: spin-slow-reverse 15s linear infinite;
          animation: spin-slow-reverse 15s linear infinite;
        }

        @-webkit-keyframes float {
          0%,
          100% {
            -webkit-transform: translateY(0);
            transform: translateY(0);
          }
          50% {
            -webkit-transform: translateY(-10px);
            transform: translateY(-10px);
          }
        }

        @keyframes float {
          0%,
          100% {
            webkit-transform: translateY(0);
            transform: translateY(0);
          }
          50% {
            -webkit-transform: translateY(-10px);
            transform: translateY(-10px);
          }
        }

        .animate-float {
          -webkit-animation: float var(--duration, 4s) ease-in-out infinite;
          animation: float var(--duration, 4s) ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default HomePage;

interface CircularSVGButtonProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
  width?: number;
  height?: number;
}

export function CircularSVGButton({
  onClick,
  width = 83,
  height = 83,
}: CircularSVGButtonProps) {
  return (
    <div className="relative group" style={{ width, height }}>
      {/* Enhanced multiple white ripple waves with smoother animation */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {/* First ripple wave - Primary */}
        <div
          className="absolute bg-gradient-to-r from-white/70 via-white/60 to-white/50 rounded-full animate-[fluidRipple1_3s_cubic-bezier(0.4,0,0.2,1)_infinite] blur-[0.5px]"
          style={{ width: width * 0.9, height: height * 0.9 }}
        />

        {/* Second ripple wave - Secondary */}
        <div
          className="absolute bg-gradient-to-r from-white/50 via-white/40 to-white/30 rounded-full animate-[fluidRipple2_3s_cubic-bezier(0.4,0,0.2,1)_infinite_0.3s] blur-[0.5px]"
          style={{ width: width * 0.85, height: height * 0.85 }}
        />

        {/* Third ripple wave - Tertiary */}
        <div
          className="absolute bg-gradient-to-r from-white/40 via-white/30 to-white/20 rounded-full animate-[fluidRipple3_3s_cubic-bezier(0.4,0,0.2,1)_infinite_0.6s] blur-[0.5px]"
          style={{ width: width * 0.8, height: height * 0.8 }}
        />

        {/* Fourth ripple wave - Ambient */}
        <div
          className="absolute bg-gradient-to-r from-white/30 via-white/20 to-white/10 rounded-full animate-[fluidRipple4_3s_cubic-bezier(0.4,0,0.2,1)_infinite_0.9s] blur-[1px]"
          style={{ width: width * 0.75, height: height * 0.75 }}
        />

        {/* Fifth ripple wave - Subtle background */}
        <div
          className="absolute bg-gradient-to-r from-white/20 via-white/15 to-white/10 rounded-full animate-[fluidRipple5_3s_cubic-bezier(0.4,0,0.2,1)_infinite_1.2s] blur-[1.5px]"
          style={{ width: width * 0.7, height: height * 0.7 }}
        />
      </div>

      {/* Subtle glow effect that pulses with the animation */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className="bg-white/10 rounded-full animate-[glowPulse_3s_cubic-bezier(0.4,0,0.2,1)_infinite] blur-xl"
          style={{ width: width * 1.5, height: height * 1.5 }}
        />
      </div>

      {/* Main button - Enhanced hover effects */}
      <button
        type="button"
        onClick={onClick}
        className="relative z-10 w-full h-full flex items-center justify-center
        hover:scale-110
                   transform transition-all duration-300 ease-out
                   rounded-full group"
      >
        {/* Enhanced SVG with smoother transitions */}
        <svg
          width={width}
          height={height}
          viewBox="0 0 83 83"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="transition-all duration-300 ease-out group-hover:drop-shadow-2xl group-hover:brightness-105 rotate-180"
        >
          <g filter="url(#filter0_d_8_2404)">
            <circle
              cx="41.5"
              cy="41.5"
              r="21.5"
              fill="white"
              className="transition-all duration-300 ease-out group-hover:fill-gray-50"
            />
          </g>
          <path
            d="M30.75 46.23L41.3567 36.77L52.25 46.23"
            stroke="#EE6437"
            strokeWidth="6"
            className="transition-all duration-400 ease-out 
                       group-hover:stroke-[#FF7043]
                       group-active:translate-y-[2px] group-active:stroke-[5]"
          />
          <defs>
            <filter
              id="filter0_d_8_2404"
              x="0"
              y="0"
              width="83"
              height="83"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset />
              <feGaussianBlur stdDeviation="10" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.028 0 0 0 0 0.053 0 0 0 0 0.117 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_8_2404"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_8_2404"
                result="shape"
              />
            </filter>
          </defs>
        </svg>

        {/* Enhanced click ripple effect */}
        <div className="absolute inset-0 rounded-full overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-white/40 via-white/30 to-white/20 rounded-full transform scale-0 group-active:animate-[clickRipple_0.4s_cubic-bezier(0.4,0,0.2,1)]" />
        </div>
      </button>

      <style jsx>{`
        @keyframes fluidRipple1 {
          0% {
            transform: scale(0.5);
            opacity: 0.9;
          }
          15% {
            transform: scale(0.2);
            opacity: 0.8;
          }
          35% {
            transform: scale(1.1);
            opacity: 0.7;
          }
          55% {
            transform: scale(0.85);
            opacity: 0.6;
          }
          75% {
            transform: scale(0.1);
            opacity: 0.4;
          }
          90% {
            transform: scale(0.05);
            opacity: 0.2;
          }
          100% {
            transform: scale(0.5);
            opacity: 0.9;
          }
        }

        @keyframes fluidRipple2 {
          0% {
            transform: scale(0.45);
            opacity: 0.7;
          }
          15% {
            transform: scale(0.18);
            opacity: 0.6;
          }
          35% {
            transform: scale(1.05);
            opacity: 0.5;
          }
          55% {
            transform: scale(0.8);
            opacity: 0.4;
          }
          75% {
            transform: scale(0.08);
            opacity: 0.3;
          }
          90% {
            transform: scale(0.03);
            opacity: 0.15;
          }
          100% {
            transform: scale(0.45);
            opacity: 0.7;
          }
        }

        @keyframes fluidRipple3 {
          0% {
            transform: scale(0.4);
            opacity: 0.5;
          }
          15% {
            transform: scale(0.16);
            opacity: 0.45;
          }
          35% {
            transform: scale(1);
            opacity: 0.4;
          }
          55% {
            transform: scale(0.75);
            opacity: 0.3;
          }
          75% {
            transform: scale(0.06);
            opacity: 0.2;
          }
          90% {
            transform: scale(0.02);
            opacity: 0.1;
          }
          100% {
            transform: scale(0.4);
            opacity: 0.5;
          }
        }

        @keyframes fluidRipple4 {
          0% {
            transform: scale(0.35);
            opacity: 0.4;
          }
          15% {
            transform: scale(0.14);
            opacity: 0.35;
          }
          35% {
            transform: scale(0.95);
            opacity: 0.3;
          }
          55% {
            transform: scale(0.7);
            opacity: 0.25;
          }
          75% {
            transform: scale(0.04);
            opacity: 0.15;
          }
          90% {
            transform: scale(0.01);
            opacity: 0.08;
          }
          100% {
            transform: scale(0.35);
            opacity: 0.4;
          }
        }

        @keyframes fluidRipple5 {
          0% {
            transform: scale(0.3);
            opacity: 0.3;
          }
          15% {
            transform: scale(0.12);
            opacity: 0.25;
          }
          35% {
            transform: scale(0.9);
            opacity: 0.2;
          }
          55% {
            transform: scale(0.65);
            opacity: 0.15;
          }
          75% {
            transform: scale(0.02);
            opacity: 0.1;
          }
          90% {
            transform: scale(0.005);
            opacity: 0.05;
          }
          100% {
            transform: scale(0.3);
            opacity: 0.3;
          }
        }

        @keyframes glowPulse {
          0% {
            opacity: 0.1;
            transform: scale(0.8);
          }
          35% {
            opacity: 0.3;
            transform: scale(1.2);
          }
          75% {
            opacity: 0.05;
            transform: scale(0.6);
          }
          100% {
            opacity: 0.1;
            transform: scale(0.8);
          }
        }

        @keyframes clickRipple {
          0% {
            transform: scale(0);
            opacity: 0.6;
          }
          50% {
            opacity: 0.3;
          }
          100% {
            transform: scale(1.2);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
