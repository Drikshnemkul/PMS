import React, { useEffect, useState } from "react";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  // const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const getProducts = async () => {
    const response = await axios.get(
      "https://656aa595dac3630cf7273294.mockapi.io/products"
    );
    setProducts(response.data);
  };

  useEffect(() => {
    getProducts();
  }, []);
  console.log(products);
  return (
    <>
      <Navbar />
      <div className="card-container">
        {products.map((product) => {
          return (
            <div key={product.id} className="card">
              <img src={product.productImage} alt="product image" />
              <h2 className="Product-name">{product.productName}</h2>
              <p className="product-description">
                {product.productDescription}
              </p>
              <p className="product-price">Rs {product.productPrice}</p>
              <Link to={`/singleProduct/${product.id}`}>See More</Link>
              {/* <button onClick={() => navigate("/singleProduct")}>
                See More
              </button> */}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Home;
