import React from "react";

// Components
import Section from "./Section/Section";
import Benefit from "./Benefits/Benefit";
import {
  firstTitle,firstText,firstAlt,
  secondTitle,secondText,secondAlt,
  thirdTitle,thirdText,thirdAlt,
  fourthTitle,fourthText,fourthAlt
} from "./Text/Text";

// Style
import "./Service.module.css";
import style from "./Service.module.css";

// Images
import Structure from "../../../Images/Structure.jpg";
import equipment from "../../../Images/equipment.jpg";
import whatFarm from "../../../Images/inside.jpeg"
import care from "../../../Images/care.jpeg"

function Service() {
  return (
    <div>
      <h2 id="solutions" className={style.header}>خدمات اصلی</h2>

      <Section target={"/blog/greenhouse-structure"} image={Structure} rowAlign={{ flexDirection: "row" }} title={firstTitle} text={firstText} altText={firstAlt}/>

      <Section target={"/blog/greenhouse-equipment"} image={equipment} rowAlign={{ flexDirection: "row-reverse" }} title={secondTitle} text={secondText} altText={secondAlt} />

      <Benefit />

      <Section target={"/blog/choose-corp"} image={whatFarm} rowAlign={{ flexDirection: "row" }} title={thirdTitle} text={thirdText} altText={thirdAlt}/>

      <Section target={"/blog/plant-care"} image={care} rowAlign={{ flexDirection: "row-reverse" }} title={fourthTitle} text={fourthText} altText={fourthAlt}/>
    </div>
  );
}

export default Service;
