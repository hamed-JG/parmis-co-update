import React from "react";

// Components
import Banner from "../Components/Home/Banner/Banner";
import Experience from "../Components/Home/Experience/Experience";
import UnderBanner from "../Components/Home/Under Banner/UnderBanner";

function Home() {
  return (
    <div>
      <Banner />

      <UnderBanner />

      <Experience/>
      
    </div>
  );
}

export default Home;
