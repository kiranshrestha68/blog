import React from "react";
import "./blogpost.css";
import Card from "../UI/card/Card";

const Blogpost = (props) => {
  console.log(props);
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
          <img
            src="https://www.thewowstyle.com/wp-content/uploads/2014/12/best-love-quotes.jpg"
            alt="Post Image"
          />
        </div>

        <div className="postContent"> 
        <h3> Post Title</h3>
        <p> lorem spum </p>
        </div>
      </Card>
    </div>
  );
};

export default Blogpost;
