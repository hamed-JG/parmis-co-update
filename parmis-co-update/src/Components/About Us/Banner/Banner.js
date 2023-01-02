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
          <h2>درباره تیم ما</h2>
          <p>
            نواندیش پارمیس ارائه دهنده راه حل های جهانی و توسعه دهنده پروژه های گلخانه مدرن
             برای پیشرفت کشاورزی و امنیت غذایی پیشرفته است.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Banner;
