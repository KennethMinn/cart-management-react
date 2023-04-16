import React, { useContext, useState } from "react";
import { ProductsContext } from "../contexts/products-context";
import { excerpt } from "../utils/helper-func";
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from "react-icons/bs";
import { FaTrashAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const CartItems = () => {
  const { cartItems } = useContext(ProductsContext);
  const [quantity, setQuantity] = useState(1);
  console.log(quantity);

  const increaseQty = () => {
    setQuantity(quantity + 1);
  };

  const nav = useNavigate();

  const navHandler = () => {
    nav("/");
  };

  return (
    <>
      {cartItems.length > 0 ? (
        <>
          <div className=" flex flex-col items-center gap-5 mt-10 shadow-sm border-b-2">
            {cartItems?.map(({ id, image, title, price }) => (
              <div className=" flex items-center gap-20 mb-10" key={id}>
                <div className="">
                  <img src={image} className=" w-[85px]" />
                </div>
                <div className=" w-[500px]">
                  <h1 className=" font-bold text-xl">{excerpt(title, 70)}</h1>
                  <h3 className=" font-bold text-xl">${price}</h3>
                  <div className=" flex items-center gap-6 text-lg mt-3 ">
                    <BsArrowLeftSquareFill className=" text-cyan-500 cursor-pointer" />
                    <h1>{quantity}</h1>
                    <BsArrowRightSquareFill
                      className=" text-cyan-500 cursor-pointer"
                      onClick={increaseQty}
                    />
                  </div>
                </div>
                <FaTrashAlt className=" cursor-pointer text-2xl text-red-500" />
              </div>
            ))}
          </div>
          <div className=" flex justify-between font-bold text-xl mx-64 mt-6">
            <h1>total:</h1>
            <h1>$0000</h1>
          </div>
        </>
      ) : (
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
      )}
    </>
  );
};

export default CartItems;
