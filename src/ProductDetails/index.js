
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import './style.css'


const ProductDetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/products/${productId}`);
        const result = await response.json();
        setProduct(result);
      } catch (error) {
        console.log(error.message);
      }
    };

    getProduct();
  }, [productId]);

  if (!product) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="product-details">
      <h1>Product Details</h1>
      <div className="details">
        <img src={product.thumbnail} className="image" />
        <h2 className="title">{product.title}</h2>
        <p className="price">{product.price}</p>
        <p className="discount">{product.discountPercentage}</p>
        <p className="rating">{product.rating}</p>
        <p className="description">{product.description}</p>
        <p className="stock">{product.stock}</p>
        <p className="category">{product.category}</p>
        <p className="brand">{product.brand}</p>
        <button className="add-to-cart">Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductDetails;
