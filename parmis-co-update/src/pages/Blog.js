import React from "react";
import { GET_BLOGS_INFO } from "../graphql/queries";
import { useQuery } from "@apollo/client";

// Components
import BlogCard from "../Components/Shared/BlogCard/BlogCard";
import LoadingSpinner from "../Components/Shared/Tools/LoadingSpinner";
import Banner from "../Components/Shared/Banner/Banner";
import Phone from "../Components/Shared/phoneBtn/Phone";

// Image and Text
import blogPic from "../Images/Blog.jpeg";

function Blog() {
  const { loading, data, errors } = useQuery(GET_BLOGS_INFO);

  if (loading) return <LoadingSpinner />;

  if (errors) return <h2>errors...</h2>;
  return (
    <div>
      <Banner
        image={blogPic}
        header={"آخرین مقالات"}
        text={"نقاط عطف کسب و کار، نوآوری های علمی و آموزشی "}
      />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          margin: "50px auto",
        }}
      >
        {data.posts.map((post) => (
          <BlogCard {...post} key={post.id} />
        ))}
      </div>
      <Phone />
    </div>
  );
}

export default Blog;
