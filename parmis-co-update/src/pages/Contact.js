import React from "react";

// Components
// import Banner from "../Components/ContactUs/Banner/Banner";
import MainSection from "../Components/ContactUs/mainSection/MainSection";
import Banner from "../Components/Shared/Banner/Banner";
import Phone from "../Components/Shared/phoneBtn/Phone";
import SocialBig from "../Components/Shared/Social media/BigIcon/SocialBig";

// Images AND Text
import contactPic from "../Images/Contact.jpeg"
const text = `
تیم ما آماده به اشتراک گذاشتن تجربیات و تخصص ما است`;

function Contact() {
  return (
    <div>
      {/* <Banner /> */}
      <Banner image={contactPic} header={"در تماس باشید"} text={text} />

      <MainSection />

      <Phone />

      <SocialBig />
    </div>
  );
}

export default Contact;
