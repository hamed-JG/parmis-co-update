import React from "react";

function BigBackgroundWave() {
  return (
    <svg
      style={{
        position: "absolute",
        top: "-2",
        width: "100%",
        height: "45px",
        zIndex: "3",
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="1152"
      height="45"
      viewBox="0 0 1152 45"
      preserveAspectRatio="none"
    >
      <rect
        width="1152"
        height="100%"
        fill="#ffffff"
        clipPath="url(#footer-sub-clip)"
      ></rect>
      <clipPath id="footer-sub-clip">
        <path
          id="Path_13"
          data-name="Path 13"
          d="M 0 27 c 0 -62.5 1152 41.5 1152 10 v -39 h -1152 Z"
          fill="#ffffff"
        ></path>
      </clipPath>
    </svg>
  );
}

export default BigBackgroundWave;
