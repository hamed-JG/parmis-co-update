import React from "react";

import Footer from "../Components/Shared/Footer/Footer";
import CallToAction from "../Components/Shared/Call to action/CallToAction";
import Banner from "../Components/About Us/Banner/Banner";
import Vision from "../Components/About Us/OurVision/Vision";
import Service from "../Components/About Us/OurServices/Service";
import InstaBar from "../Components/Shared/Instagram/InstaBar";

const text = `ما را در اینستاگرام دنبال کنید و تصاویر آخرین پروژه‌های انجام شده را مشاهده فرمایید `;

function Services() {
  return (
    <div>
      <Banner />

      <Vision />

      <Service />

      <InstaBar text={text} />

      <CallToAction />

      <Footer />
    </div>
  );
}

export default Services;
