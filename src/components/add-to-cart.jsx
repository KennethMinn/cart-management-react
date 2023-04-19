import React, { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CartItems from "./cart-items";
import { selectCartItems } from "../store/products/product-selector";

const AddToCart = () => {
  const cartItems = useSelector(selectCartItems);
  const total = cartItems?.reduce((pv, cv) => pv + cv.price, 0);
  const [mainTotal, setMainTotal] = useState(total);

  const calcTotalIncrement = (price) => {
    setMainTotal(mainTotal + price);
  };

  const calcTotalDecrement = (price) => {
    setMainTotal(mainTotal - price);
  };

  const nav = useNavigate();

  const navHandler = () => {
    nav("/");
  };

  return (
    <>
      {cartItems?.length === 0 ? (
        <>
          <h1 className=" text-center text-7xl font-bold text-gray-500 mt-56">
            Your Cart is empty.
          </h1>
          <div className=" mt-5 flex justify-center">
            <button
              className=" rounded-lg text-white cursor-pointer text-2xl bg-gray-700 px-5 py-2"
              onClick={navHandler}
            >
              fill it
            </button>
          </div>
        </>
      ) : (
        <>
          <div className=" flex flex-col items-center gap-5 mt-10">
            {cartItems?.map((item) => (
              <CartItems
                item={item}
                key={item.id}
                calcTotalIncrement={calcTotalIncrement}
                calcTotalDecrement={calcTotalDecrement}
              />
            ))}
          </div>
          <div className=" flex justify-between font-bold text-xl mx-72 mt-6 mb-8">
            <h1>total:</h1>
            <h1>${mainTotal.toFixed(2)}</h1>
          </div>
        </>
      )}
    </>
  );
};

export default AddToCart;
