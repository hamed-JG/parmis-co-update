import React from "react";

// Style
import "./Section.module.css"
import style from "./Section.module.css"

function Section({rowAlign,image}) {
  return (
    <div className={style.container} style={rowAlign}>
        <div className={style.photo}>
          <img src={image} alt={"team"} />
        </div>
        <div className={style.content}>
          <h2>مهمترین کار برای شروع کشاورزی گلخانه‌ای احداث سازه است</h2>
          <p>
            سازه‌ای که فضای مناسبی داشته باشد و همینطور از استحکام لازم برخوردار
            باشد برای این کار مناسب است. طراحی طاق گوتیک به دلیل توانایی آن در
            مقاومت در برابر بادهای شدید و بارش برف سنگین مورد توجه قرار گرفته
            است. شکل نیمه اشکی سقف از خساراتی که انباشته شدن بارندگی ممکن است
            ایجاد کند جلوگیری می‌کند. مزایای دیگری همچون هزینه ساخت کمتر، طراحی
            انعطاف پذیر، فضای بیشتر و دوام بالاتر نیز از دیگر مشخصات این توع
            سازه ها است.
          </p>
          <p>نواندیش پارمیس 30 سال تجربه ساخت این نوع گلخانه را داراست</p>
        </div>
    </div>
  );
}

export default Section;
