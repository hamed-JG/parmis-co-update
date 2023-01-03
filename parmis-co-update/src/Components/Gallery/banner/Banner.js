import React from "react";

// Components
import Wave from "../../Shared/SVG/about us page/Wave";

// Style
import "./Banner.module.css";
import style from "./Banner.module.css";


function Banner() {
  return (
    <div className={style.container}>
      <Wave />
      <div className={style.layer}>
        <div className={style.content}>
          <h2>گالری تصاویر</h2>
          <p>
           آخرین پروژه‌‌ها، نمای داخلی گلخانه و تجهیزات آنها  
          </p>
        </div>
      </div>
    </div>
  );
}

export default Banner;
