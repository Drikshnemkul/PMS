import React from "react";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="navbar" id="myNavbar">
      <a href="#" class="logo">
        Logo
      </a>
      <a href="#">Home</a>
      <a href="#">About</a>
      <a href="#">Services</a>
      <a href="#">Contact</a>
      <a href="javascript:void(0);" class="icon" onclick="myFunction()">
        &#9776;
      </a>
    </div>
  );
};

export default Navbar;
