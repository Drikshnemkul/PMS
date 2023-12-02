import React, { useEffect, useState } from "react";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import axios from "axios";

const Home = () => {
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
      {products.map((product) => {
        return (
          <div key={product.id} className="card">
            <img src={product.productImage} alt="product image" />
            <h2 className="Product-name">{product.productName}</h2>
            <p className="product-description">{product.productDescription}</p>
          </div>
        );
      })}
    </>
  );
};

export default Home;
