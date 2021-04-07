import React from 'react'
import './navbar.css';

const Navbar = () => {
    return (
        <div className="navbar">  
            <ul className="navbarMenu">
                <li> <a href="#"> Home </a></li>
                <li> <a href="#"> About Us</a></li>
                <li> <a href="#"> Post </a></li>
                <li> <a href="#"> Contact Us </a></li>
            </ul>
        </div>
    )
}

export default Navbar
