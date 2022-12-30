import React from "react";
import { GET_BLOGS_INFO } from "../graphql/queries";
import { useQuery } from "@apollo/client";

// Components
import BlogCard from "../Components/Shared/BlogCard/BlogCard";
import LoadingSpinner from "../Components/Shared/Tools/LoadingSpinner";
import Banner from "../Components/Blog/Banner/Banner";

function Blog() {
  const { loading, data, errors } = useQuery(GET_BLOGS_INFO);

  if (loading) return <LoadingSpinner />;

  if (errors) return <h2>errors...</h2>;
  return (
    <div>
      <Banner />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          maxWidth: "1400px",
          margin: "50px auto",
        }}
      >
        {data.posts.map((post) => (
          <BlogCard {...post} key={post.id} />
        ))}
      </div>
    </div>
  );
}

export default Blog;
