import React from "react";

function Wave() {
  return (
    <svg
    style={{
        position: "absolute",
        bottom: "-2",
        width: "100%",
        height: "65px",
        zIndex: "4",
    }}
      xmlns="http://www.w3.org/2000/svg"
      width="1152"
      height="64"
      viewBox="0 0 1152 64"
      preserveAspectRatio="none"
    >
      <rect
        width="1152"
        height="100%"
        fill="#ffffff"
        clipPath="url(#about-us-hero-clip)"
      ></rect>
      <clipPath id="about-us-hero-clip">
        <path
          id="Path_17"
          data-name="Path 17"
          d="M 1152 19.707 c 0 126.17 -1152 -61.94 -1152 0 V 64 h 1152 Z"
          fill="#ffffff"
        ></path>
      </clipPath>
    </svg>
  );
}

export default Wave;
