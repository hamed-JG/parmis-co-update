import React from "react";

import Banner from "../Components/About Us/Banner/Banner";
import Vision from "../Components/About Us/OurVision/Vision";
import Service from "../Components/About Us/OurServices/Service";
import InstaBar from "../Components/Shared/Instagram/InstaBar";
import SmallGallery from "../Components/About Us/Gallery/SmallGallery";

const text = `ما را در اینستاگرام دنبال کنید و تصاویر آخرین پروژه‌های انجام شده را مشاهده فرمایید `;

function Services() {
  return (
    <div>
      <Banner />

      <Vision />

      <Service />

      <SmallGallery />

      <InstaBar text={text} />
    </div>
  );
}

export default Services;
