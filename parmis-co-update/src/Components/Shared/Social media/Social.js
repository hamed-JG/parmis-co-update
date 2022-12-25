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

function Social() {
  return (
    <div className={style.container}>

      <FaWhatsapp style={{ margin: "10px", width: "25px", height: "25px" }} />
      <FaInstagram style={{ margin: "10px", width: "25px", height: "25px" }} />
      <FaTelegramPlane
        style={{ margin: "10px", width: "25px", height: "25px" }}
      />
      <FaLinkedinIn style={{ margin: "10px", width: "25px", height: "25px" }} />
      
    </div>
  );
}

export default Social;
