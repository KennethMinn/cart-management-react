import React, { useContext, useState } from "react";
import { excerpt } from "../utils/helper-func";
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from "react-icons/bs";
import { FaTrashAlt } from "react-icons/fa";
import { ProductsContext } from "../contexts/products-context";

const CartItems = ({ item, calcTotalIncrement, calcTotalDecrement }) => {
  const { removeItemFromCart } = useContext(ProductsContext);

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
    removeItemFromCart(item);
    calcTotalDecrement(oneItemPrice);
  };

  return (
    <>
      <div className=" flex items-center gap-20 mb-10" key={id}>
        <div className="">
          <img src={image} className=" w-[85px]" />
        </div>
        <div className=" w-[500px]">
          <h1 className=" font-bold text-xl">{excerpt(title, 70)}</h1>
          <h3 className=" font-bold text-xl">${oneItemPrice.toFixed(2)}</h3>
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
