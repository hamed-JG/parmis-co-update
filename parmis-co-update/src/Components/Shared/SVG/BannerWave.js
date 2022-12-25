import React from "react";

function BannerWave() {
  return (
    <svg
      style={{
        position: "absolute",
        bottom: "-1px",
        width: "100%",
        height: "50px",
        zIndex: "2",
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="1152"
      height="27"
      viewBox="0 0 1152 27"
      preserveAspectRatio="none"
    >
      <rect
        width="1152"
        height="100%"
        fill="#FFF"
        clipPath="url(#hero-clip)"
      ></rect>
      <clipPath id="hero-clip">
        <path
          id="path_20"
          data-name="path 20"
          d="m 1152 0 S 1023.6 27 576 27 S 0 0 0 0 V 27 H 1152 Z"
          fill="#FFF"
        ></path>
      </clipPath>
    </svg>
  );
}

export default BannerWave;
