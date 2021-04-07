import React from "react";
import "./navbar.css";
import SearchIcon from "@material-ui/icons/Search";

const Navbar = () => {
  return (
    <div className="navbar">
      <ul className="navbarMenu">
        <li>
          {" "}
          <a href="#"> Home </a>
        </li>
        <li>
          {" "}
          <a href="#"> About Us</a>
        </li>
        <li>
          {" "}
          <a href="#"> Post </a>
        </li>
        <li>
          {" "}
          <a href="#"> Contact Us </a>
        </li>
      </ul>

      <div className="search"> 
        <input type="text" placeholder="Search"/>
        <span className="search-icon">
          <SearchIcon />
        </span>
      </div>
    </div>
  );
};

export default Navbar;
