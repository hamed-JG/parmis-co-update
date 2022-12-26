import React from "react";

// Components
import Banner from "../Components/Home/Banner/Banner";
import BigSec from "../Components/Home/Big Section/BigSec";
import Experience from "../Components/Home/Experience/Experience";
import Certificates from "../Components/Home/Our Certificates/Certificates";
import UnderBanner from "../Components/Home/Under Banner/UnderBanner";

function Home() {
  return (
    <div>
      <Banner />

      <UnderBanner />

      <Experience/>

      <Certificates/>
      
      <BigSec/>
      
    </div>
  );
}

export default Home;
