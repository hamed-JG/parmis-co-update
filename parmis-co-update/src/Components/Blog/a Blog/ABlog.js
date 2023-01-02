import React from "react";
import { useQuery } from "@apollo/client";
import { useNavigate, useParams } from "react-router-dom";
import { GET_POST_INFO } from "../../../graphql/queries";
import sanitizeHtml from "sanitize-html";

import "./ABlog.module.css";
import style from "./ABlog.module.css";

import LoadingSpinner from "../../Shared/Tools/LoadingSpinner";
import InstaBar from "../../Shared/Instagram/InstaBar";
// import CommentsForm from "./comment/From/CommentsForm";
// import Comments from "./comment/comments/Comments";

const instaText = `

ما را در اینستاگرام دنبال کنید تا اولین کسی باشید که از آخرین اخبار و رویدادهای یک صنعت مطلع می شود
`;

function ABlog() {
  const { slug } = useParams();
  console.log(slug);
  const navigate = useNavigate();

  const { loading, data, errors } = useQuery(GET_POST_INFO, {
    variables: { slug },
  });
  if (loading) return <LoadingSpinner />;

  if (errors) return <h2>errors...</h2>;

  return (
    <div className={style.container}>
      <div className={style.header}>
        <h2 className={style.headerTitle}>{data.post.title}</h2>

        <span className={style.backBtn} onClick={() => navigate(-1)}>
          <span>بازگشت</span>
          <i className="fa-solid fa-chevron-left"></i>
        </span>
      </div>

      <img
        className={style.coverPhoto}
        src={data.post.coverPhoto.url}
        alt="cover"
      />

      <div className={style.authorHolder}>
        <div className={style.author}>
          <img
            className={style.avatar}
            src={data.post.author.avatar.url}
            alt="profile"
          />

          <div className={style.text}>
            <h3>{data.post.author.name}</h3>
            <span>{data.post.author.field}</span>
          </div>
        </div>
      </div>

      <h2 className={style.headerTitle1}>{data.post.title}</h2>

      <div
        className={style.contentHolder}
        dangerouslySetInnerHTML={{
          __html: sanitizeHtml(data.post.content.html),
        }}
      ></div>

      {/* <CommentsForm slug={slug} />

      <Comments slug={slug} /> */}
      <InstaBar text={instaText} />
    </div>
  );
}

export default ABlog;
