import React from "react";
import { useQuery } from "@apollo/client";
import { GET_BLOGS_INFO } from "../../../graphql/queries";

// Components
import BlogCard from "../../Shared/BlogCard/BlogCard";
import LoadingSpinner from "../../Shared/LoadingSpinner";

// Style
import "./HomeBlog.module.css"
import style from  "./HomeBlog.module.css"

const HomeBlog = () => {
  const { loading, data, errors } = useQuery(GET_BLOGS_INFO);
    console.log(data)

  if (loading) return <LoadingSpinner />;

  if (errors) return <h2>errors...</h2>;

  return (
    <section className={style.container}>
      <div className={style.header}>
        <h2>آخرین مقالات</h2>
      </div>
      <div className={style.cardHolder}>
        {data.posts.slice(0, 3).map((post) => (
          <BlogCard {...post} key={post.id} />
        ))}
      </div>
    </section>
  );
};

export default HomeBlog;
