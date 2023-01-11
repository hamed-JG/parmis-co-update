import React from "react";

import "./Phone.module.css";
import style from "./Phone.module.css";

import { FaPhone } from "react-icons/fa";

const call = () => {};

function Phone() {
  return (
    <a href="tel:+989121443811">
      <div className={style.container}>
        <FaPhone className={style.icon} onClick={call} />
      </div>
    </a>
  );
}

export default Phone;
