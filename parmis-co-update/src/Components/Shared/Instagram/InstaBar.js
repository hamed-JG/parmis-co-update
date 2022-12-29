import React from "react";
import { Link } from "react-router-dom";
import "./InstaBar.module.css";
import style from "./InstaBar.module.css";
function InstaBar({text}) {
  return (
    <section className={style.container}>
      <div className={style.content}>
        <div className={style.instaPic}></div>
        <div className={style.text}>
          <div>
            {text}
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
