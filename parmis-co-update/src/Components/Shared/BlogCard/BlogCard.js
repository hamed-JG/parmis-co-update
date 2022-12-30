import React from "react";
import { Link } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa";
// Style
import "./BlogCard.module.css";
import style from "./BlogCard.module.css";

const BlogCard = ({ title, coverPhoto, author, datePublished, slug }) => {
  console.log(author);
  return (
    <div className={style.container}>
      <img className={style.cardCover} src={coverPhoto.url} alt="cover" />
      <span className={style.date}>{datePublished}</span>

      <div className={style.Content}>
        <Link to={`/blog/${slug}`}>
          <span className={style.titleText}>{title}</span>
        </Link>
      </div>

      <Link to={`/blog/${slug}`}>
        <div className={style.button}>
          بیشتر
          <FaAngleLeft />
        </div>
      </Link>
    </div>
  );
};

export default BlogCard;
