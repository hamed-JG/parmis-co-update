import React from "react";
import { Link } from "react-router-dom";

import {
  FaWhatsapp,
  FaInstagram,
  FaTelegramPlane,
  FaLinkedinIn,
} from "react-icons/fa";

// Style
import "./SocialBig.module.css";
import style from "./SocialBig.module.css";

const whatsApp = () => {
  window.open("https://wa.me/message/LDCG2QSPOTNVF1");
};

const instagram = () => {
  window.open("https://instagram.com/kgnparmis?igshid=YmMyMTA2M2Y=");
};
const telegram = () => {
  window.open("https://t.me/Kgnparmis_bot");
};
const linkedIn = () => {
  window.open("https://www.linkedin.com/in/hamed-jahangiri-908643216");
};


function SocialBig() {
  return (
    <div className={style.container}>
      <h2>در فضای مجازی صفحات ما را دنبال کنید</h2>
      <div className={style.icons}>
      <FaWhatsapp onClick={whatsApp} className={style.icon} />
      <FaInstagram onClick={instagram} className={style.icon} />
      <FaTelegramPlane onClick={telegram} className={style.icon} />
      <FaLinkedinIn onClick={linkedIn} className={style.icon} />
      </div>
    </div>
  );
}

export default SocialBig;
