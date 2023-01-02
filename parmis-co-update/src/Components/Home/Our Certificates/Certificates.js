import React from "react";

// Style
import "./Certificates.module.css";
import style from "./Certificates.module.css";
import certificate from "../../../Images/certificate.jpg";
import Certificate from "./ourCertificate/Certificate.js";
function Certificates() {
  return (
    <div className={style.container}>
        <h2>گواهینامه و مهارت‌ها</h2>

        <div className={style.rowFlex}>

        <Certificate image={certificate} title={"گواهینامه EPCS"}/>

        <Certificate image={certificate} title={"گواهینامه انجمن گلخانه سازان کشور"}/>

        <Certificate image={certificate} title={"گواهینامه توزیع نهاده‌های کشاورزی"}/>

        <Certificate image={certificate} title={"گواهینامه تولید محصولات گلخانه‌ای"}/>
        
        <Certificate image={certificate} title={"گواهینامه تولید محصولات گلخانه‌ای"}/>

        </div>

    </div>
  );
}

export default Certificates;
