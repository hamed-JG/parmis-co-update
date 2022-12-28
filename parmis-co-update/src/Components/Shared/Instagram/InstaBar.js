import React from "react";
import { Link } from "react-router-dom";
import "./InstaBar.module.css";
import style from "./InstaBar.module.css";
function InstaBar() {
  return (
    <section className={style.container}>
      <div className={style.content}>
        <div className={style.instaPic}></div>
        <div className={style.text}>
          <div>
            ما را در اینستاگرام دنبال کنید تا اولین کسی باشید که از آخرین اخبار
            و رویدادهای یک صنعت مطلع می شود
          </div>
          <Link to={"/"} className={style.link}>
            <div className={style.btn}>Follow</div>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default InstaBar;
