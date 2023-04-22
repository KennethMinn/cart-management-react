import React, { useContext, useState } from "react";
import { excerpt } from "../utils/helper-func";
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from "react-icons/bs";
import { FaTrashAlt } from "react-icons/fa";
import { removeItemFromCart } from "../store/products/product-reducer";
import { useDispatch } from "react-redux";

const CartItems = ({ item, calcTotalIncrement, calcTotalDecrement }) => {
  const dispatch = useDispatch();

  let { id, image, title, price } = item;

  let [count, setCount] = useState(1);

  const increment = () => {
    setCount(++count);
    calcTotalIncrement(price);
  };

  const decrement = () => {
    if (count > 1) {
      setCount(--count);
      calcTotalDecrement(price);
    }
  };

  const oneItemPrice = price * count;

  const delBtn = () => {
    dispatch(removeItemFromCart(item));
    calcTotalDecrement(oneItemPrice);
  };

  return (
    <>
      <div className=" flex items-center gap-20 pb-6 border-b-2" key={id}>
        <div className="">
          <img src={image} className=" w-[85px]" />
        </div>
        <div className=" w-[500px]">
          <h1 className=" font-bold text-xl truncate">{title}</h1>
          <h3 className=" font-bold text-lg">${price.toFixed(2)}</h3>
          <div className=" flex items-center gap-6 text-lg mt-3 ">
            <BsArrowLeftSquareFill
              className=" text-cyan-500 cursor-pointer"
              onClick={decrement}
            />
            <h1>{count}</h1>
            <BsArrowRightSquareFill
              className=" text-cyan-500 cursor-pointer"
              onClick={increment}
            />
          </div>
        </div>
        <FaTrashAlt
          onClick={delBtn}
          className=" cursor-pointer text-2xl text-red-500"
        />
      </div>
    </>
  );
};

export default CartItems;
