import React from "react";

const Cart = ({ cart }) => {
  let total = 0;
  let shipping = 0;
  let quantity = 0;
  for (const product of cart) {
    quantity = quantity + product.quantity;
    total = total + product.price * product.quantity;
    shipping = shipping + product.shipping;
  }

  const tax = parseFloat((total * 0.1).toFixed(2));
  const grandTotal = total + shipping + tax;

  return (
    <div className="text-neutral px-5 sticky top-5 ">
      <h1 className="text-3xl font-bold text-base-100 text-center underline mb-5">
        Order Summary
      </h1>
      <p className="text-xl font-medium my-1">
        Selected Item : <span className="text-base-100"> {quantity} </span>
      </p>
      <p className="text-xl font-medium my-1">
        Total Price : <span className="text-base-100"> ${total} </span>
      </p>
      <p className="text-xl font-medium my-1">
        Total Shipping : <span className="text-base-100"> ${shipping} </span>
      </p>
      <p className="text-xl font-medium my-1">
        Tax : <span className="text-base-100"> {tax} </span>
      </p>
      <p className="text-xl text-base-100 font-medium mt-5">
        Grand Total : <span className="text-base-100 "> {grandTotal} </span>
      </p>
    </div>
  );
};

export default Cart;
