import React from "react";
import {
  FaWhatsapp,
  FaInstagram,
  FaTelegramPlane,
  FaLinkedinIn,
} from "react-icons/fa";

// Style
import "./Social.module.css";
import style from "./Social.module.css";

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

function Social() {
  return (
    <div className={style.container}>
      <FaWhatsapp onClick={whatsApp} className={style.icon} />
      <FaInstagram onClick={instagram} className={style.icon} />
      <FaTelegramPlane onClick={telegram} className={style.icon} />
      <FaLinkedinIn onClick={linkedIn} className={style.icon} />
    </div>
  );
}

export default Social;
