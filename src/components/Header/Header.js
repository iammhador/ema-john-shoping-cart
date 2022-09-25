import React from "react";
import images from "../../images/Logo.svg";
import "./header.css";
const Header = () => {
  return (
    <div>
      <nav className="header">
        <img src={images} alt="" />
        <div>
          <a href="/invertory">Inventory</a>
          <a href="/shop">Shop</a>
          <a href="/order">Order</a>
          <a href="/about">About</a>
        </div>
      </nav>
    </div>
  );
};

export default Header;
