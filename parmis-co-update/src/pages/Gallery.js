import React from "react";


import MainGallery from "../Components/Gallery/MainGallery";
import Banner from "../Components/Shared/Banner/Banner";

// Images AND Text
import galleryPic from "../Images/gallery.jpeg";
const text = `آخرین پروژه‌‌ها، نمای داخلی گلخانه و تجهیزات آنها`



function Gallery() {
  return (
    <div>
      <Banner image={galleryPic} header={"گالری تصاویر"} text={text}/>
      <MainGallery />
    </div>
  );
}

export default Gallery;
