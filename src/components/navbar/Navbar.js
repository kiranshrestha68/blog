import React, {useState} from "react";
import "./navbar.css";
import SearchIcon from "@material-ui/icons/Search";
import {NavLink} from "react-router-dom";

const Navbar = () => {

  const[search, setSearch] = useState(false);

  const submitSearch = (e) => {
    e.preventDefault();
    alert("searched");
  };

  const openSearch = () => {
    setSearch(true);
  }

  const searchClass = search?'searchInput active':'searchInput';

  return (
    <div className="navbar">
      <ul className="navbarMenu">
        <li>
          {" "}
          <NavLink to="/"> Home </NavLink>
        </li>
        <li>
          {" "}
          <NavLink to="aboutus"> About Us</NavLink>
        </li>
        <li>
          {" "}
          <NavLink to="post"> Post </NavLink>
        </li>
        <li>
          {" "}
          <NavLink to="contactus"> Contact Us </NavLink>
        </li>
      </ul>

      <div className="search">
        <form onSubmit={submitSearch}>
          <input type="text" placeholder="Search"  className={searchClass}/>
          <span onClick={openSearch} className="searchIcon">
            < SearchIcon />
          </span>
        </form>
      </div>
    </div>
  );
};

export default Navbar;
