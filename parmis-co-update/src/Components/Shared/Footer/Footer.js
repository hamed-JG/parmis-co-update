import React from "react";
import { Link } from "react-router-dom";

// Components
import Social from "../Social media/Social";

// Style and image
import "./Footer.module.css";
import style from "./Footer.module.css";
import logo from "../../../Images/logo.png";
import { FaRegCopyright } from "react-icons/fa";

function Footer() {
  return (
    <section className={style.container}>
      <div className={style.top}>
        <div className={style.logo}>
          <h2>گلخانه سازان نواندیش پارمیس</h2>
          <img src={logo} alt="logo" />
          <div className={style.social}>
            <Social width={"25px"} height={"25px"} />
          </div>
        </div>

        <div className={style.main}>
          <div className={style.links}>
            <h3>دسترسی سریع</h3>
            <Link to={"/"}><li className={style.link}>صفحه نخست</li></Link>
            <Link to={"/aboutUs"}><li className={style.link}>درباره ما</li></Link>
            <Link to={"/blog"}><li className={style.link}>مقالات</li></Link>
            <Link to={"/gallery"}><li className={style.link}>تصاویر</li></Link>
            <Link to={"/contact"}><li className={style.link}>تماس با ما</li></Link>
            
          </div>
          <div className={style.contact}>
            <h3>اطلاعات تماس</h3>
            <div className={style.address}>
              <li>
                دفتر مرکزی: تهران میدان توحید خیابان نصرت غربی کوچه کاظم بیگی
                پلاک 5
              </li>
              <li>شعبه 1 : پاکدشت فیلستان روبروی بانک صادرات پلاک 25</li>
            </div>

            <div className={style.tel}>
              <div>شماره‌های تماس : </div>
              <div>
                <li>+98 021 66 577 380</li>
                <li>+98 021 36 413 145</li>
                <li>+98 912 144 38 11</li>
                <li>+98 902 24 777 30</li>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={style.footer}>
        <FaRegCopyright/>
        تمامی حقوق سایت متعلق به شرکت گلخانه سازان نواندیش پارمیس است
      </div>
    </section>
  );
}

export default Footer;
