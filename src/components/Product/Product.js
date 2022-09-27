import React from "react";
import noImg from "../../images/no-pictures.png";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
const Product = ({ product, handleAddToCart }) => {
  const { img, name, price, seller, ratings } = product;

  return (
    <div className="">
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={img ? img : noImg} alt="No Images Found" />
        </figure>
        <div className="card-body bg-primary">
          <h2 className="card-title text-base-100 text-xl font-bold">
            {name.slice(0, 25)}
          </h2>
          <h3 className="text-base-100 text-lg font-semibold">
            <span className="text-neutral">Product Price : </span>
            {price}
          </h3>
          <div className="card-actions justify-end">
            <p className="text-base-100 text-base font-medium">
              <span className="text-neutral">Seller : </span>
              {seller}
            </p>
            <p className="text-base-100 text-base font-medium">
              <span className="text-neutral">Ratings : </span>
              {ratings}
            </p>
          </div>
          <div className="text-base font-semibold bg-base-100 text-center py-1 mt-4 rounded-lg hover:bg-cyan-400">
            <button
              className="flex mx-auto py-1"
              onClick={() => handleAddToCart(product)}
            >
              <p className="mr-2">Add to cart</p>
              <ShoppingCartIcon className="h-6 w-6 text-primary"></ShoppingCartIcon>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
