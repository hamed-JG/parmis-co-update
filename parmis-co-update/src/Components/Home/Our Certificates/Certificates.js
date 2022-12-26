import React from "react";

// Style
import "./Certificates.module.css";
import style from "./Certificates.module.css";
import certificate from "../../../Images/certificate.jpg";
import Certificate from "./Certificate.js";
function Certificates() {
  return (
    <div className={style.container}>
        <h2>گواهینامه و مهارت‌ها</h2>

        <div className={style.rowFlex}>

        <Certificate image={certificate}/>

        <Certificate image={certificate}/>

        <Certificate image={certificate}/>

        <Certificate image={certificate}/>

        </div>

    </div>
  );
}

export default Certificates;
