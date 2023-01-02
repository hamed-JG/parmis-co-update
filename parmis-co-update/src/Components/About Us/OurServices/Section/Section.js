import React from "react";
import { Link } from "react-router-dom";
// Style
import "./Section.module.css";
import style from "./Section.module.css";

function Section({ rowAlign, image, title, text, altText }) {
  return (
    <div className={style.container} style={rowAlign}>
      <div className={style.photo}>
        <img src={image} alt={"team"} />
      </div>
      <div className={style.content}>
        <h2>{title}</h2>
        <p>{text}
        <Link to={"/blog/spanish-greenhouse"}>
        مقالات مرتبط
        </Link></p>
        <p>{altText}
        </p>
      </div>
    </div>
  );
}

export default Section;
