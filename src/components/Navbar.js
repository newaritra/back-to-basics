import React from "react";
import logo from "./../assets/logo.svg";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbarContainer">
      <div className="navbarInnerContainer">
        <div className="navbarLogoContainer">
          <img src={logo} className="navbarLogoImage" />
          <p className="navbarLogoTitle">Start</p>
        </div>
        <div className="navbarLinksContainer">
          <a href="#">Home</a>
          <a href="#">Portfolio</a>
          <a href="#">Services</a>
          <a href="#">Contact</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
