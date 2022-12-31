import React from "react";
import BigSecWave from "../../Shared/SVG/BigSecWave";
import BigSecWave1 from "../../Shared/SVG/BigSecWave1";

// Style
import "./BigSec.module.css";
import style from "./BigSec.module.css";
import organic from "../../../Images/organic.jpg";
import support from "../../../Images/supportYou.jpg";

function BigSec() {
  return (
    <section className={style.container}>
      <BigSecWave />
      <div className={style.rowFlex}>
        <div className={style.content}>
          <h2 className={style.header}>
            راه‌حل‌های کشاورزی مدرن میسازیم که کارایی و تولید کشاورزان را افزایش
            میدهد
          </h2>
          
          <p className={style.text}>
            کشاورزان منبع اصلی الهام ما برای جستجوی راه حل های بهتر و نوآوری
            هستند. ما با کشاورزان همراه می شویم و می مانیم تا شاهد رشد و موفقیت
            آنها باشیم. ماموریت ما انقلاب پایدار صنعت کشاورزی در کشور است.
          </p>
        </div>
        <div className={style.cover}>
          <img src={organic} alt="support" />
        </div>
      </div>
      <div className={style.rowFlex}>
        <div className={style.cover}>
          <img src={support} alt="support" />
        </div>
        <div className={style.content}>
          <h2 className={style.header}>در طول مسیر همواره همراه شما هستیم</h2>
          <p className={style.text}>
            اعضای تیم ما جهت درک بهتر خواسته ها و نیاز های شما همواره در دسترس
            بوده و از راه‌های ارتباطی متعددی جهت ارائه خدمات فعالیت می‌کنند. مهمترین
            ماموریت ما ارتقای آموزش کشاورزی و افزایش دانش فنی کشاورزان است.
          </p>
        </div>
      </div>
      <BigSecWave1 />
    </section>
  );
}

export default BigSec;
