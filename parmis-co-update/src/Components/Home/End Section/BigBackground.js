import React from "react";

// Components
import BigBackgroundWave from "../../Shared/SVG/BigBackgroundWave";

// Style
import "./BigBackground.module.css";
import style from "./BigBackground.module.css";
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
          <span className={style.cta}>تماس با کارشناسان</span>
        </div>
      </div>
    </div>
  );
}

export default BigBackground;
