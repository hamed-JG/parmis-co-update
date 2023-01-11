import React from "react";

// Style
import "./Info.module.css";
import style from "./Info.module.css";

import { FaDirections } from "react-icons/fa";

const location = () => {
  window.open("https://goo.gl/maps/L7FKNpWKV7Rd1GQM8");
};
const location1 = () => {
  window.open("https://goo.gl/maps/sWa3LSgMp7XNE5H38");
};

function Info() {
  return (
    <div className={style.container}>
      <h2 className={style.header}>اطلاعات تماس</h2>
      <div className={style.part}>
        <h4>دفتر مرکزی</h4>
        <div>
          تهران - میدان توحید - خیابان نصرت غربی - کوچه کاظم بیگی پلاک 5
        </div>

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <span>شماره تماس:</span>
          <a href="tel:+982166577380" style={{ direction: "ltr" }}>
            <span>+98 21 - 66 577 380</span>
          </a>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <span>مهندس باغبان:</span>
          <a href="tel:+989121443811" style={{ direction: "ltr" }}>
            <span>+98 912 144 38 11</span>
          </a>
        </div>

        <div className={style.openMap} onClick={location}>
          مسیریابی
          <FaDirections style={{ width: "20px", height: "20px" }} />
        </div>
      </div>
      <div className={style.part}>
        <h4>شعبه یک </h4>
        <div>پاکدشت - فیلستان - روبروی بانک صادرات پلاک 25</div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <span>شماره تماس:</span>
          <a href="tel:+982136413455" style={{ direction: "ltr" }}>
            <span>+98 21 - 36 413 455</span>
          </a>
        </div>
        <div className={style.openMap} onClick={location1}>
          مسیریابی
          <FaDirections style={{ width: "20px", height: "20px" }} />
        </div>
      </div>
    </div>
  );
}

export default Info;
