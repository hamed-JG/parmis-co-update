import React from "react";
import { Link } from "react-router-dom";

//Style
import "./ExperienceIcons.module.css";
import style from "./ExperienceIcons.module.css";

// images
import design from "../../../../Images/design.png";
import create from "../../../../Images/create.png";
import upgrade from "../../../../Images/upgrade.png";
import plant from "../../../../Images/plant.png";
import takeCare from "../../../../Images/takeCare.png";
import chart from "../../../../Images/UpArrow.png";
import increase from "../../../../Images/increase.png";
import payment from "../../../../Images/payment.png";
import stable from "../../../../Images/stable.png";

function ExperienceIcons(image) {
  return (
    <div className={style.container}>

      {/* <Link className={style.link} to={"/"}>
        <div className={style.icons}>
          <img className={style.icon} src={design} alt={"icon"} />
          <p className={style.text}>طراحی</p>
        </div>
      </Link> */}
      <Link className={style.link} to={"/"}>
        <div className={style.icons}>
          <img className={style.icon} src={create} alt={"icon"} />
          <p className={style.text}>احداث سازه</p>
        </div>
      </Link>
      <Link className={style.link} to={"/"}>
        <div className={style.icons}>
          <img className={style.icon} src={upgrade} alt={"icon"} />
          <p className={style.text}>تجهیز گلخانه</p>
        </div>
      </Link>
      <Link className={style.link} to={"/"}>
        <div className={style.icons}>
          <img className={style.icon} src={plant} alt={"icon"} />
          <p className={style.text}>مشاوره نوع کشت</p>
        </div>
      </Link>
      <Link className={style.link} to={"/"}>
        <div className={style.icons}>
          <img className={style.icon} src={takeCare} alt={"icon"} />
          <p className={style.text}>نگهداری محصول</p>
        </div>
      </Link>
      {/* <Link className={style.link} to={"/"}>
        <div className={style.icons}>
          <img className={style.icon} src={chart} alt={"icon"} />
          <p className={style.text}>افزایش تولید</p>
        </div>
      </Link> */}
      <Link className={style.link} to={"/"}>
        <div className={style.icons}>
          <img className={style.icon} src={increase} alt={"icon"} />
          <p className={style.text}>افزایش درآمد</p>
        </div>
      </Link>
      {/* <Link className={style.link} to={"/"}>
        <div className={style.icons}>
          <img className={style.icon} src={payment} alt={"icon"} />
          <p className={style.text}>امنیت سرمایه</p>
        </div>
      </Link> */}
      <Link className={style.link} to={"/"}>
        <div className={style.icons}>
          <img className={style.icon} src={stable} alt={"icon"} />
          <p className={style.text}>فعالیت پایدار</p>
        </div>
      </Link>
    </div>
  );
}

export default ExperienceIcons;
