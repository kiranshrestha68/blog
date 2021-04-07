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

      <Card>
        <div className="cardHeader">
          <span> Social Network </span>
        </div>
      </Card>
    </div>
  );
};

export default Sidebar;
