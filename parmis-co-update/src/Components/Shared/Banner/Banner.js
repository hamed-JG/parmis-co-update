import React from "react";
import Wave from "../SVG/about us page/Wave";

import "./Banner.module.css";
import style from "./Banner.module.css";

function Banner({ image, header, text }) {
  return (
    <div className={style.container} style={{ backgroundImage: `url(${image})` }}>

      <Wave />

      <div className={style.content}>
        <h2>{header}</h2>
        <p>{text}</p>
      </div>
      
    </div>
  );
}

export default Banner;
