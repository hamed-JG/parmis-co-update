import React from "react";
import "./Certificate.module.css"
import style from "./Certificate.module.css"
function Certificate(p) {
  return (
    <div className={style.container}>
      <div>
        <img
          src={p.image}
          alt="certif"
          className={style.image}
        />
      </div>
      <div>
        <div className={style.title}>{p.title}</div>
      </div>
    </div>
  );
}

export default Certificate;
