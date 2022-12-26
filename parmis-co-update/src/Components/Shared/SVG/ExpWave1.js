import React from "react";

function ExpWave1() {
  return (
    <svg
      style={{
        position: "absolute",
        bottom: "0",
        left: "0",
        width: "100%",
        height: "56px",
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="1152"
      height="56"
      viewBox="0 0 1152 56"
      preserveAspectRatio="none"
    >
      <rect
        width="1152"
        height="100%"
        fill="#ffffff"
        clipPath="url(#expertise-bottom-clip)"
      ></rect>
      <clipPath id="expertise-bottom-clip">
        <path
          id="expertise-bottom-path"
          data-name="expertise-bottom-path"
          d="M 1152 56 H 0 v -5 c 385 -114 1010 93 1152 -50.5 Z"
          fill="#ffffff"
        ></path>
      </clipPath>
    </svg>
  );
}

export default ExpWave1;
