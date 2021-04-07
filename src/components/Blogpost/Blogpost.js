import React from "react";
import "./blogpost.css";
import Card from "../UI/card/Card";

const Blogpost = () => {
  return (
    <div className="blogPostContainer">
      <Card>
        <div className="blogHeader">
          <span className="blogCategory"> Featured </span>
          <h1 className="postTitle"> KStha is Always Op </h1>
          <span className="postedBy">
            {" "}
            posted on April 07,202 by Kiran Shrestha.{" "}
          </span>
        </div>

        <div className="postImageContainer">
          <img src="https://www.thewowstyle.com/wp-content/uploads/2014/12/best-love-quotes.jpg" alt="Post Image" />
        </div>
      </Card>
    </div>
  );
};

export default Blogpost;
