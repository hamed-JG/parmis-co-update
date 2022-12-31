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

function SocialBig() {
  return (
    <div className={style.container}>
      <h2>در فضای مجازی صفحات ما را دنبال کنید</h2>
      <div className={style.icons}>
        <Link>
          <FaWhatsapp className={style.icon} />
        </Link>
        <Link>
          <FaInstagram className={style.icon}/>
        </Link>
        <Link>
          <FaTelegramPlane className={style.icon}/>
        </Link>
        <Link>
          <FaLinkedinIn className={style.icon}/>
        </Link>
      </div>
    </div>
  );
}

export default SocialBig;
