import React from "react";
import Logo from "../Logo/Logo";
import Navbar from "../navbar/Navbar";
import Card from "../UI/card/Card";
import "./hero.css";

const Hero = () => {
  return (
    <div>
      <Card>
        <div style={{ padding: "50px 0" }}>
          <Logo />
        </div>
        <Navbar />
      </Card>
    </div>
  );
};

export default Hero;
