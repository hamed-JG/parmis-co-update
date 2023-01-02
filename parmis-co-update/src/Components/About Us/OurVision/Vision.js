import React from "react";

// Style
import "./Vision.module.css";
import style from "./Vision.module.css";

function Vision() {
  return (
    <div className={style.container}>
        <div className={style.vision}>
          <p className={style.visionText}>رسالت ما در این راه</p>
          <h3 className={style.visionTitr}>کشاورزی پایدار بر اساس امنیت غذایی ، ایجاد اشتغال و گردش سرمایه پر بازده</h3>
        </div>
        <div className={style.content}>
          <h2 className={style.header}>چشم انداز تیم ما</h2>
          <p className={style.shortText}>
          ما به همراه کشاورزان مهم ترین چالش های کشاورزی را حل می کنیم تا فردای
            امن تر و امیدوارکننده تر را تضمین کنیم.
          </p>
          <p className={style.longText}>
            کشور عزیز ما با توجه به ظرفیت های سرزمینی و منابع فراوان در آینده
            کشاورزی پایدار پیشگام خواهد شد.
          
            ما در توسعه و استقرار راه‌حل‌های کشاورزی پر بازده
            برای حل مهم‌ترین چالش‌های بخش کشاورزی گلخانه‌ای در ایران پیشرو هستیم.


            فناوری های متمایز ما توسط بهترین استعدادهای این صنعت پشتیبانی می‌شود.
<br/>
            ما به مشتریان خود در کشاورزی امکانات می دهیم تا با استفاده از گلخانه‌های مدرن زندگی خود را ایمن تر، سالم تر و ثروتمند تر کنند.
          </p>
        </div>
    </div>
  );
}

export default Vision;
