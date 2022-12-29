import React from "react";

// Components
import Banner from "../Components/Home/Banner/Banner";
import BigSec from "../Components/Home/Big Section/BigSec";
import HomeBlog from "../Components/Home/Blog/HomeBlog";
import Experience from "../Components/Home/Experience/Experience";
import Certificates from "../Components/Home/Our Certificates/Certificates";
import UnderBanner from "../Components/Home/Under Banner/UnderBanner";
import InstaBar from "../Components/Shared/Instagram/InstaBar";
import CallToAction from "../Components/Shared/Call to action/CallToAction"


const instaText = ` ما را در اینستاگرام دنبال کنید تا اولین کسی باشید که از آخرین اخبار
و رویدادهای یک صنعت مطلع می شود`

function Home() {
  return (
    <div>
      <Banner />

      <UnderBanner />

      <Experience />

      <Certificates />

      <BigSec />

      <HomeBlog />

      <InstaBar text={instaText} />

      <CallToAction />
    </div>
  );
}

export default Home;
