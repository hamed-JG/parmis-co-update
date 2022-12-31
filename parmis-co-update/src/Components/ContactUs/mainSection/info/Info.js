import React from "react";
import { Link } from "react-router-dom";

// Style
import "./Info.module.css";
import style from "./Info.module.css";

import { FaDirections } from "react-icons/fa";

function Info() {
  return (
    <div className={style.container}>
      <h2 className={style.header}>اطلاعات تماس</h2>
      <div className={style.part}>
        <h4>دفتر مرکزی</h4>
        <div>
          تهران - میدان توحید - خیابان نصرت غربی - کوچه کاظم بیگی پلاک 5
        </div>
        <div style={{ display: "flex" }}>
          <span>شماره تماس:</span>
          <Link style={{ direction: "ltr"}}>
            <span >021 - 66577380</span>
          </Link>
        </div>
        <Link >
          <div className={style.openMap}>
            مسیریابی
            <FaDirections style={{ width: "20px", height: "20px" }} />
          </div>
        </Link>
      </div>
      <div className={style.part}>
        <h4>شعبه شماره 1</h4>
        <div>
          پاکدشت - فیلستان - روبروی بانک صادرات پلاک 25
        </div>
        <div style={{ display: "flex" }}>
          <span>شماره تماس:</span>
          <Link style={{ direction: "ltr"}}>
            <span>021 - 36413455</span>
          </Link>
        </div>
        <Link >
          <div className={style.openMap}>
            مسیریابی
            <FaDirections style={{ width: "20px", height: "20px" }} />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Info;
