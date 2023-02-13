import React,{useState} from "react";
import "./navbar.css";
import {AiOutlineMenu} from 'react-icons/ai'
import {HiMenuAlt3} from 'react-icons/hi'
const Navbar = () => {
    const [toggleMenu,setToggleMenu] = useState(true)
    
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
        <div className="burger-container">
        {
            toggleMenu ? <HiMenuAlt3 size={20} onClick={()=>{setToggleMenu(false)}} /> : 
            <AiOutlineMenu size={20}  onClick={()=>{setToggleMenu(true)}} />
        }
        
        </div>
      </div>
      {
        toggleMenu && (
            <div className="nav-links-burger">
          <ul>
            <li><a href="home">Home</a></li>
            <li> <a href="services">Services</a></li>
            <li><a href="career">Career</a></li>
            <li> <a href="about">About Us</a></li>
            <li>  <a href="contact">Contact Us</a></li>
          </ul>
        </div> 
        )
      }
    </div>
  );
};

export default Navbar;
