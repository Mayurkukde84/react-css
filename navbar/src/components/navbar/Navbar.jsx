import React from "react";
import "./navbar.css";
const Navbar = () => {
  return (
    <div className="container">
      <div className="nav-container">
        <div className="logo-container">
          <p>logo</p>
        </div>
        <div className="nav-links">
          <a href="home">Home</a>
          <a href="services">Services</a>
          <a href="career">Career</a>
          <a href="about">About Us</a>
          <a href="contact">Contact Us</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
