import React from "react";

// Style
import "./Benefit.module.css";
import style from "./Benefit.module.css";
import {
  FaRegCalendarAlt,
  FaRainbow,
  FaTasks,
  FaMale,
  FaGem,
  FaSpa,
  FaBuilding,
  FaCheck,
} from "react-icons/fa";
function Benefit() {
  return (
    <div className={style.container}>
      <h2 className={style.header}>فعالیت ما در یک نگاه</h2>
      <div className={style.icons}>
        <div className={style.icon}>
          <FaRegCalendarAlt
            style={{ width: "70px", height: "70px", color: "#375c95" }}
          />
          <div>
            <h3>30</h3>
            <span>سال‌های فعالیت در زمینه کشاورزی</span>
          </div>
        </div>
        <div className={style.icon}>
          <FaRainbow
            style={{ width: "70px", height: "70px", color: "#375c95" }}
          />
          <div>
            <h3>1000</h3>
            <span>پروژه‌های موفق اجرا شده</span>
          </div>
        </div>
        <div className={style.icon}>
          <FaMale style={{ width: "70px", height: "70px", color: "#375c95" }} />
          <div>
            <h3>100</h3>
            <span>افراد مشغول به همکاری</span>
          </div>
        </div>
        <div className={style.icon}>
          <FaTasks
            style={{ width: "70px", height: "70px", color: "#375c95" }}
          />
          <div>
            <h3>1000+</h3>
            <span>راهکارهای به روز برای ارتقا</span>
          </div>
        </div>
        <div className={style.icon}>
          <FaSpa style={{ width: "70px", height: "70px", color: "#375c95" }} />
          <div>
            <h3>4</h3>
            <span>تعداد گلخانه‌های فعال</span>
          </div>
        </div>
        <div className={style.icon}>
          <FaBuilding
            style={{ width: "70px", height: "70px", color: "#375c95" }}
          />
          <div>
            <h3>2</h3>
            <span>تعداد دفاتر فعال</span>
          </div>
        </div>
        <div className={style.icon}>
          <FaGem style={{ width: "70px", height: "70px", color: "#375c95" }} />
          <div>
            <h3>10+</h3>
            <span>گواهینامه ها و افتخارات</span>
          </div>
        </div>
        <div className={style.icon}>
          <FaCheck
            style={{ width: "70px", height: "70px", color: "#375c95" }}
          />
          <div>
            <h3>7</h3>
            <span>تولیدات ملی مورد استفاده</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Benefit;
