import React from "react";
import "./post.css";
import Blogpost from "../../components/Blogpost/Blogpost";
import Sidebar from "../../components/sidebar/Sidebar";

const Post = (props) => {
  console.log(props);
  return (
    <section className="container">
      <Blogpost />
      <Sidebar />
    </section>
  );
};

export default Post;
