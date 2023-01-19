import React from "react";
import { Link } from "react-router-dom";
import BannerWave from "../../Shared/SVG/BannerWave";
// Style
import "./Banner.module.css";
import style from "./Banner.module.css";
function Banner() {
  return (
    <section className={style.container}>
      <div className={style.content}>
        <h1>شرکت مهندسی کشاورزی گلخانه سازان نواندیش پارمیس</h1>
        <h2 className={style.header2}>راهکاری نوین برای پیشرفت کشاورزی</h2>
        <div>سلام</div>
        <Link to={"/aboutUs"} className={style.cta}>
          درباره راهکار‌ها بیشتر بدانید
        </Link>
      </div>

      <BannerWave/>

    </section>
  );
}

export default Banner;
