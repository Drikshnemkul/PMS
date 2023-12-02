import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  //   const navigate = useNavigate();
  return (
    <div className="navbar" id="myNavbar">
      <a href="#" className="logo">
        Logo
      </a>
      <Link to="/">Home</Link>
      {/* <a href="/addProduct">Add product</a> */}
      <Link to="/addProduct">Add Product</Link>
      {/* <button onClick={() => navigate("/addProduct")}>Add Product</button> */}
    </div>
  );
};

export default Navbar;
