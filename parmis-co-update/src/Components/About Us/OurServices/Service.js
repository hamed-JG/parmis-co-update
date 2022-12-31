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
      <h2 className={style.header}>خدمات اصلی</h2>

      <Section image={Structure} rowAlign={{ flexDirection: "row" }} title={firstTitle} text={firstText} altText={firstAlt}/>

      <Section image={equipment} rowAlign={{ flexDirection: "row-reverse" }} title={secondTitle} text={secondText} altText={secondAlt} />

      <Benefit />

      <Section image={whatFarm} rowAlign={{ flexDirection: "row" }} title={thirdTitle} text={thirdText} altText={thirdAlt}/>

      <Section image={care} rowAlign={{ flexDirection: "row-reverse" }} title={fourthTitle} text={fourthText} altText={fourthAlt}/>
    </div>
  );
}

export default Service;
