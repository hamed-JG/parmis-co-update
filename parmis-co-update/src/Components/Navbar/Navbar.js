import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

import "./Navbar.module.css";
import style from "./Navbar.module.css";

function Navbar() {

  const [showMenu, setShowMenu] = useState(false);

  return (

    <div className={style.container}>
        
      <nav>
        <ul className={style.menuList}>
          <li className={style.link}>
            <Link to={"/"}>صفحه نخست</Link>
          </li>
          <li className={style.link}>
            <Link to={"/products"}>محصولات</Link>
          </li>
          <li className={style.link}>
            <Link to={"/blogs"}>مقالات</Link>
          </li>
          <li className={style.link}>
            <Link to={"/services"}>خدمات ما</Link>
          </li>
          <li className={style.link}>
            <Link to={"/contactUs"}>تماس با ما</Link>
          </li>
        </ul>
      </nav>

      <FaBars className={style.menuIcon} onClick={() => setShowMenu(true)} />

      <div className={showMenu ? style.showHamburgerMenu : style.hamburgerMenu}>
        <div className={style.closeIcon}>
          <FaTimes onClick={() => setShowMenu(false)} />
        </div>

        <nav>
          <ul className={style.hamburgerMenuList}>
            <li className={style.link}>
              <Link to={"/"} onClick={() => setShowMenu(false)}>
                صفحه نخست
              </Link>
            </li>
            <li className={style.link}>
              <Link to={"/products"} onClick={() => setShowMenu(false)}>
                محصولات
              </Link>
            </li>
            <li className={style.link}>
              <Link to={"/blogs"} onClick={() => setShowMenu(false)}>
                مقالات
              </Link>
            </li>
            <li className={style.link}>
              <Link to={"/services"} onClick={() => setShowMenu(false)}>
                خدمات ما
              </Link>
            </li>
            <li className={style.link}>
              <Link to={"/contactUs"} onClick={() => setShowMenu(false)}>
                تماس با ما
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
