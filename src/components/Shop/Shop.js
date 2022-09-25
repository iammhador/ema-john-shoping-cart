import React, { useEffect } from "react";
import { useState } from "react";
import Product from "../Product/Product";
import "./Shop.css";
const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  const handleAddToCart = (product) => {
    console.log(product);
    const newCart = [...cart, product];
    setCart(newCart);
  };
  return (
    <div className="shop-container">
      <div className="grid grid-cols-3 gap-5 py-5 my-5 mx-5 product-container">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          ></Product>
        ))}
      </div>
      <div className="cart-container pt-5 my-5 text-center">
        <h1 className="text-3xl text-primary">Order Summary</h1>
        <h3 className="text-xl text-cyan-400 mt-5">
          Total Product : {cart.length}
        </h3>
      </div>
    </div>
  );
};

export default Shop;
