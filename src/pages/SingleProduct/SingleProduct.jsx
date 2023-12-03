import Navbar from "../../components/Navbar/Navbar";
import { useNavigate, useParams } from "react-router-dom";
import "./SingleProduct.css";
import { useEffect, useState } from "react";
import axios from "axios";

const SingleProduct = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  //store product data coming in object
  const [product, setProduct] = useState({});

  //delete product
  const deleteProduct = async () => {
    //api hit to delete
    const response = await axios.delete(
      "https://656aa595dac3630cf7273294.mockapi.io/products/" + id
    );
    if (response.status == 200) {
      navigate("/");
    } else {
      alert("something went wrong");
    }
  };

  const fetchSingleProduct = async () => {
    const response = await axios.get(
      "https://656aa595dac3630cf7273294.mockapi.io/products/" + id
    );
    setProduct(response.data);
    console.log(product);
  };

  useEffect(() => {
    fetchSingleProduct();
  }, []);

  return (
    <>
      <Navbar />
      <div className="card">
        <img src={product.productImage} alt="Product Image" />
        <h2 className="product-name">{product.productName}</h2>
        <p className="product-description">{product.productDiscription}</p>
        <mark>Rs {product.productPrice}</mark>
        <button onClick={deleteProduct}>Delete</button>
        <br />
      </div>
    </>
  );
};

export default SingleProduct;
