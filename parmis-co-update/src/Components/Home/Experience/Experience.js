import React from "react";
// Components
import ExperienceIcons from "./Icons/ExperienceIcons";
// Style
import "./Experience.module.css";
import style from "./Experience.module.css";
import ExpWave from "../../Shared/SVG/ExpWave";
import ExpWave1 from "../../Shared/SVG/ExpWave1";
function Experience() {
  return (
    <section className={style.container}>
      <ExpWave />
      <ExperienceIcons />
      <div className={style.content}>
        <h2>تجربیات و دستاوردها</h2>
        <h3>
          نواندیش پارمیس در موقعیتی منحصر به فرد قرار دارد و رسیدگی به افق‌های پیش
          رو مانند :
          <br/>
          <br/>
           گسترش کشاورزی گلخانه‌ای و افزایش منابع غذایی هدف ماست.
        </h3>
        <p>
          ما صاحبان برند و تولیدکنندگان در صنایع کشاورزی کشور را قادر می‌سازیم تا
          عملیات اجرایی خود را بهینه کنند و هدر رفت منابع و محصولات را کاهش دهند.
        </p>
      </div>
      <ExpWave1/>
    </section>
  );
}

export default Experience;
