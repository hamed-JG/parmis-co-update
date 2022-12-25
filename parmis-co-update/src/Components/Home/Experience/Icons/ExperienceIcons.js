import React from "react";
import { Link } from "react-router-dom";

//Style
import "./ExperienceIcons.module.css";
import style from "./ExperienceIcons.module.css";

// images
import greenhouse from "../../../../Images/greenhouse.png";

function ExperienceIcons(image) {
  return (
    <div className={style.container}>
      <Link className={style.link} to={"/"}>
        <div className={style.icons}>
          <img className={style.icon} src={greenhouse} alt={"icon"} />
          <p className={style.text}>props.text</p>
        </div>
      </Link>
      <Link className={style.link} to={"/"}>
        <div className={style.icons}>
          <img className={style.icon} src={greenhouse} alt={"icon"} />
          <p className={style.text}>props.text</p>
        </div>
      </Link>
      <Link className={style.link} to={"/"}>
        <div className={style.icons}>
          <img className={style.icon} src={greenhouse} alt={"icon"} />
          <p className={style.text}>props.text</p>
        </div>
      </Link>
      <Link className={style.link} to={"/"}>
        <div className={style.icons}>
          <img className={style.icon} src={greenhouse} alt={"icon"} />
          <p className={style.text}>props.text</p>
        </div>
      </Link>
      <Link className={style.link} to={"/"}>
        <div className={style.icons}>
          <img className={style.icon} src={greenhouse} alt={"icon"} />
          <p className={style.text}>props.text</p>
        </div>
      </Link>
      <Link className={style.link} to={"/"}>
        <div className={style.icons}>
          <img className={style.icon} src={greenhouse} alt={"icon"} />
          <p className={style.text}>props.text</p>
        </div>
      </Link>
      <Link className={style.link} to={"/"}>
        <div className={style.icons}>
          <img className={style.icon} src={greenhouse} alt={"icon"} />
          <p className={style.text}>props.text</p>
        </div>
      </Link>
      <Link className={style.link} to={"/"}>
        <div className={style.icons}>
          <img className={style.icon} src={greenhouse} alt={"icon"} />
          <p className={style.text}>props.text</p>
        </div>
      </Link>
      <Link className={style.link} to={"/"}>
        <div className={style.icons}>
          <img className={style.icon} src={greenhouse} alt={"icon"} />
          <p className={style.text}>props.text</p>
        </div>
      </Link>
    </div>
  );
}

export default ExperienceIcons;
