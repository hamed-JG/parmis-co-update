import React from "react";
import { Link } from "react-router-dom";

// Components
import BigBackgroundWave from "../SVG/BigBackgroundWave";

// Style
import "./CallToAction.module.css";
import style from "./CallToAction.module.css";

function BigBackground() {
  return (
    <div className={style.container}>
      <BigBackgroundWave />
      <div className={style.layer}>
        <div className={style.content}>
          <h2>قدم بعدی را بردارید</h2>
          <p>
            بیایید کشف کنیم که چگونه می توانیم کارایی، قابلیت اطمینان و پایداری
            بیشتری را برای عملیات شما به ارمغان بیاوریم. تیم ما آماده است تا
            دیدگاه ها و تخصص ما را برای یافتن بهترین راه حل برای چالش‌های
            کشاورزی شما به اشتراک بگذارد.
          </p>
          <Link to={"/contact"}>
          
          <span className={style.cta}>تماس با کارشناسان</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BigBackground;
