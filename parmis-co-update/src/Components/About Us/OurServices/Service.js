import React from "react";

// Components
import Section from "./Section/Section";
import Benefit from "./Benefits/Benefit";

// Style
import "./Service.module.css";
import style from "./Service.module.css";

// Images
import Structure from "../../../Images/Structure.jpg";
import equipment from "../../../Images/equipment.jpg";

function Service() {
  return (
    <div>
      <h2 className={style.header}>خدمات اصلی</h2>

      <Section image={Structure} rowAlign={{ flexDirection: "row" }} />

      <Section image={equipment} rowAlign={{ flexDirection: "row-reverse" }} />

      <Benefit />

      <Section image={Structure} rowAlign={{ flexDirection: "row" }} />

      <Section image={equipment} rowAlign={{ flexDirection: "row-reverse" }} />
    </div>
  );
}

export default Service;
