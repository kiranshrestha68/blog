import React from "react";
import "./sidebar.css";
import Card from "../UI/card/Card";

const Sidebar = () => {
  return (
    <div className="sidebarContainer">
      <Card style={{ marginBottom: "20px" }}>
        <div className="cardHeader">
          <span> About Us </span>
        </div>

        <div className="profileImageContainer">
          <img
            src="https://static.toiimg.com/thumb/msid-74004000,imgsize-511880,width-800,height-600,resizemode-75/74004000.jpg"
            alt=""
          />
        </div>

        <div className="cardBody">
          <p className="personalBio">
            {" "}
            MY name is Kiran Shrestha. I am a Software Development
            specialization in MERN stack developer.{" "}
          </p>
        </div>
      </Card>

      <Card
        style={{
          marginButtom: "20px",
          padding: "20px",
          boxSizing: "border-box",
        }}
      >
        <div className="cardHeader">
          <span> Social Network </span>
        </div>
      </Card>

      <br />

      <Card
        style={{
          marginButtom: "20px",
          padding: "20px",

          boxSizing: "border-box",
        }}
      >
        <div className="cardHeader">
          <span> Recent Posts </span>
        </div>

        <div className="recentPosts">
          <div className="recentPost">
            <h3> Post Title </h3>
            <span> April 11, 2020</span>
          </div>
        </div>
        <div className="recentPosts">
          <div className="recentPost">
            <h3> Post Title </h3>
            <span> April 11, 2020</span>
          </div>
        </div>
      </Card>

    
    </div>
  );
};

export default Sidebar;
