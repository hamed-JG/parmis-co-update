import React from "react";

// Style
import "./Benefit.module.css";
import style from "./Benefit.module.css";
import {
  FaCalendar,
  FaCheckSquare,
  FaListAlt,
  FaIdCard,
  FaEnvira,
  FaBuilding,
  FaWhmcs,
  FaSketch
  
} from "react-icons/fa";
function Benefit() {
  return (
    <div className={style.container}>
      <h2 className={style.header}>فعالیت ما در یک نگاه</h2>
      <div className={style.icons}>
        <div className={style.icon}>
          <FaCalendar
            style={{ width: "60px", height: "60px", color: "#375c95" }}
          />
          <div className={style.text}>
            <h5>30</h5>
            <span>سال‌های فعالیت در زمینه کشاورزی</span>
          </div>
        </div>
        <div className={style.icon}>
          <FaCheckSquare
            style={{ width: "60px", height: "60px", color: "#375c95" }}
          />
          <div className={style.text}>
            <h5>100+</h5>
            <span>پروژه‌های موفق اجرا شده</span>
          </div>
        </div>
        <div className={style.icon}>
          <FaIdCard style={{ width: "60px", height: "60px", color: "#375c95" }} />
          <div className={style.text}>
            <h5>100</h5>
            <span>افراد مشغول به همکاری</span>
          </div>
        </div>
        <div className={style.icon}>
          <FaListAlt
            style={{ width: "60px", height: "60px", color: "#375c95" }}
          />
          <div className={style.text}>
            <h5>1000+</h5>
            <span>راهکارهای به روز برای ارتقا</span>
          </div>
        </div>
        <div className={style.icon}>
          <FaEnvira style={{ width: "60px", height: "60px", color: "#375c95" }} />
          <div className={style.text}>
            <h5>4</h5>
            <span>تعداد گلخانه‌های فعال مجموعه</span>
          </div>
        </div>
        <div className={style.icon}>
          <FaBuilding
            style={{ width: "60px", height: "60px", color: "#375c95" }}
          />
          <div className={style.text}>
            <h5>2</h5>
            <span>تعداد دفاتر فعال</span>
          </div>
        </div>
        <div className={style.icon}>
          <FaSketch style={{ width: "60px", height: "60px", color: "#375c95" }} />
          <div className={style.text}>
            <h5>10+</h5>
            <span>گواهینامه ها و افتخارات</span>
          </div>
        </div>
        <div className={style.icon}>
          <FaWhmcs
            style={{ width: "60px", height: "60px", color: "#375c95" }}
          />
          <div className={style.text}>
            <h5>7</h5>
            <span>تولیدات ملی مورد استفاده</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Benefit;
