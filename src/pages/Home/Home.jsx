import React from "react";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
const Home = () => {
  return (
    <>
      <Navbar />
      <div className="card">
        <img src="https://via.placeholder.com/300" alt="Product Image" />
        <div className="card-content">
          <div className="product-name">Product Name</div>
          <div className="product-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
