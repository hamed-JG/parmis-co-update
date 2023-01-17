import React from "react";
import "./Wave.module.css"
import style from "./Wave.module.css"
function Wave() {
  return (
    <svg
    className={style.container}
      xmlns="http://www.w3.org/2000/svg"
      width="1151"
      height="64"
      viewBox="0 0 1151 64"
      preserveAspectRatio="none"
    >
      <rect
        width="1151"
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
