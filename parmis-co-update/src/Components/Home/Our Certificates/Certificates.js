import React from "react";

// Style
import "./Certificates.module.css";
import style from "./Certificates.module.css";
import one from "../../../Images/1.jpg";
import two from "../../../Images/2.jpg";
import three from "../../../Images/3.jpg";
import four from "../../../Images/4.jpg";
import Certificate from "./ourCertificate/Certificate";
function Certificates() {
  return (
    <div className={style.container}>
        <h2>گواهینامه و مهارت‌ها</h2>

        <div className={style.rowFlex}>

        <Certificate image={one} title={"گواهینامه EPCS"}/>

        <Certificate image={two} title={"گواهینامه انجمن گلخانه سازان کشور"}/>

        <Certificate image={three} title={"گواهینامه توزیع نهاده‌های کشاورزی"}/>

        <Certificate image={four} title={"گواهینامه تولید محصولات گلخانه‌ای"}/>
        
        {/* <Certificate image={certificate} title={"گواهینامه تولید محصولات گلخانه‌ای"}/> */}

        </div>

    </div>
  );
}

export default Certificates;
