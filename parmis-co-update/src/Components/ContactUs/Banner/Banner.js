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
          <h2>در تماس باشید</h2>
          <p>
            برای پرسیدن سوال، درخواست اطلاعات، یا بیان چالش های کشاورزی خود با
            کارشناسان ما تماس بگیرید. تیم ما آماده به اشتراک گذاشتن تجربیات و
            تخصص ماست.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Banner;
