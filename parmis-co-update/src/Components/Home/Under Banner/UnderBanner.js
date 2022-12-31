import React from "react";
import { Link } from "react-router-dom";
import Social from "../../Shared/Social media/Social";
// Style
import "./UnderBanner.module.css";
import style from "./UnderBanner.module.css";

function UnderBanner() {
  return (
    <section className={style.container}>
        <div className={style.contentFlexRow}>
          <div>
            <div className={style.boldText}>
              <span>
                گلخانه سازان نواندیش پارمیس ارائه دهنده راه‌حل ها و توسعه دهنده
                پروژه های کشاورزی گلخانه‌ای در سراسر ایران و کشورهای همسایه است.
              </span>
              <br />
              <br />
              <span className={style.text}>
                کشاورزی گلخانه‌ای را کاملا می‌شناسیم
              </span>
            </div>
            <div>
              <Link to={"/"} className={style.cta}>
                <div>
                    <Social/>
                </div>
              </Link>
            </div>
          </div>
          <div className={style.contentText}>
            <p>
              ارائه دهنده راه حل هایی در سطح جهانی، سازنده و توسعه دهنده
              پروژه‌های گلخانه‌ای. قدرت گرفته از دانشجویان برتر در زمینه کشاورزی
              گلخانه‌ای. نواندیش پارمیس بهترین راهکار‌ها را برای مهمترین چالش
              های کشاورزی ارایه می‌کند.
              <br />
              <br />
              ما در اجرای سازه‌های مدرن پیشگام هستیم. ما متخصصین کشاورزی
              گلخانه‌ای هستیم، اجرای سازه‌های مستحکم و قابل جابجایی، تجهیز
              گلخانه با دستگاه‌های مدرن، مشاوره انتخاب نوع کشت و همینطور مراقبت
              پس از کاشت تخصص ما است.
              <br />
              <br />
              تیم ما امکانات جدیدی برای کشاورزی ایجاد می‌کند.
            </p>
          </div>
      </div>
    </section>
  );
}

export default UnderBanner;
