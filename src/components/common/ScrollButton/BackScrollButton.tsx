"use client";
import { useRouter } from "next/navigation";
import React from "react";

const BackScrollButton = ({ onClick }: { onClick?: () => void }) => {
  const router = useRouter();
  const handleBackClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    if (onClick) {
      onClick(); // Calls the parent function if provided
    } else {
      router.back(); // Goes to the previous page
    }
  };
  return (
    <div>
      <div
        className="fixed bottom-16 right-0 cursor-pointer"
        onClick={handleBackClick}
      >
        <svg
          width="83"
          height="83"
          viewBox="0 0 83 83"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d_8_2404)">
            <circle cx="41.5" cy="41.5" r="21.5" fill="white" />
          </g>
          <path
            d="M30.75 46.23L41.3567 36.77L52.25 46.23"
            stroke="#EE6437"
            strokeWidth="6"
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
                values="0 0 0 0 0.0281944 0 0 0 0 0.0529667 0 0 0 0 0.116667 0 0 0 0.25 0"
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
      </div>
    </div>
  );
};

export default BackScrollButton;
