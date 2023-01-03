import React from "react";
import { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_GALLERY_PHOTO } from "../../../graphql/queries";

// style & img
import "./SmallGallery.module.css";
import style from "./SmallGallery.module.css";
import { FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa";

// components
import LoadingSpinner from "../../Shared/Tools/LoadingSpinner";
import Wave from "../../Shared/SVG/BigBackgroundWave";
import BigSecWave1 from "../../Shared/SVG/BigSecWave1";
import { Link } from "react-router-dom";

const Gallery = () => {
  const { loading, data, error } = useQuery(GET_GALLERY_PHOTO);
  console.log(data);
  const [slideNumber, setSlideNumber] = useState(0);
  const [morePic, setMorePic] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = (index) => {
    setSlideNumber(index);
    setOpenModal(true);
  };

  // Close Modal
  const handleCloseModal = () => {
    setOpenModal(false);
  };

  // Previous Image
  const prevSlide = () => {
    slideNumber === 0
      ? setSlideNumber(data.galleries.length - 1)
      : setSlideNumber(slideNumber - 1);
  };

  // Next Image
  const nextSlide = () => {
    slideNumber + 1 === data.galleries.length
      ? setSlideNumber(0)
      : setSlideNumber(slideNumber + 1);
  };

  // More Image
  const moreImage = () => {
    setMorePic(!morePic);
  };

  if (loading) return <LoadingSpinner />;
  if (error) return <div> error... </div>;
  return (
    <div className={style.container}>
      <Wave />

      <h2 className={style.header}>گالری تصاویر</h2>
      {openModal && (
        <div className={style.sliderWrap}>
          <FaTimes className={style.btnClose} onClick={handleCloseModal} />
          <FaChevronRight className={style.btnPrev} onClick={prevSlide} />
          <FaChevronLeft className={style.btnNext} onClick={nextSlide} />
          <div className={style.fullScreen}>
            <span className={style.title}>
              {data.galleries[slideNumber].photo.title}
            </span>
            <img
              src={data.galleries[slideNumber].photo.url}
              alt={data.galleries[slideNumber].title}
            />
          </div>
        </div>
      )}

      <div className={style.galleryWrap}>
        {data.galleries.slice(0, 12).map((slide, index) => {
          return (
            <img
              src={slide.photo.url}
              className={style.single}
              key={index}
              onClick={() => handleOpenModal(index)}
              alt=""
            ></img>
          );
        })}
      </div>

      <Link to={"/Gallery"}>
        <div onClick={moreImage} className={style.more}>
          تصاویر بیشتر
        </div>
      </Link>
      <BigSecWave1 />
    </div>
  );
};

export default Gallery;
