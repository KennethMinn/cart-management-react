import React from "react";
import { useNavigate } from "react-router-dom";

const Cards = ({ product, id }) => {
  const textLimit = (str, maxlength = 100) => {
    return str.length >= maxlength ? str.substr(0, maxlength) + "..." : str;
  };

  const nav = useNavigate();

  return (
    <>
      <div className=" w-[350px] border-2 shadow-lg mt-10  rounded-lg overflow-hidden">
        <img src={product.image} className=" w-[100%] h-[300px]" />
        <div className=" px-4">
          <h1 className=" text-3xl font-bold truncate mb-5">{product.title}</h1>
          <p className=" h-[80px]">{textLimit(product.description)}</p>
          <div className=" flex justify-end mt-5 mb-5">
            <button
              className=" bg-blue-500 px-5 py-2 rounded-lg cursor-pointer"
              onClick={() => nav(`details/${id}`)}
            >
              Details
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
