import React from "react";

import Vision from "../Components/About Us/OurVision/Vision";
import Service from "../Components/About Us/OurServices/Service";
import InstaBar from "../Components/Shared/Instagram/InstaBar";
import Phone from "../Components/Shared/phoneBtn/Phone";
import Banner from "../Components/Shared/Banner/Banner";

// Image and Text
import servicesPic from "../Images/farmland.jpg"
const text = `جدیدترین  تصاویر از آخرین فعالیت تیم نواندیش پارمیس`;

function Services() {
  return (
    <div> 
      
      <Banner image={servicesPic} header={"درباره تیم"} text={"توسعه دهنده کشاورزی صنعتی، مجری گلخانه‌های مدرن و ارائه دهنده راهکارهای نوین کشت"}/>

      <Vision />

      <Service />

      <InstaBar text={text} />

      <Phone/>
    </div>
  );
}

export default Services;
