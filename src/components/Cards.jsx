import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { excerpt } from '../utils/helper-func';
import { useDispatch } from 'react-redux';
import { setCartItems } from '../store/products/product-reducer';
//*********** console.log([...Array(5)].map((_, i) => console.log(i+1)));  **************

const Cards = ({ product, id }) => {
  const nav = useNavigate();
  const dispatch = useDispatch();

  return (
    <>
      <div className=" w-[450px] border-2 shadow-lg mt-10  rounded-lg overflow-hidden">
        <div className=" flex justify-center my-5">
          <img src={product.image} className=" w-[130px] h-40" />
        </div>
        <div className=" px-4">
          <h1 className=" text-3xl font-bold truncate mb-5">{product.title}</h1>
          <p className=" h-[80px]">{excerpt(product.description)}</p>
          <div className=" flex justify-between">
            <div className=" text-lg font-bold">${product.price}</div>
            <div className="flex items-center">
              {[...Array(5)].map((_, index) => {
                return Math.round(product.rating.rate) > index ? (
                  <AiFillStar key={index} className=" text-yellow-400" />
                ) : (
                  <AiOutlineStar key={index} className=" text-yellow-400" />
                );
              })}
            </div>
          </div>
          <div className=" flex justify-between mt-5 mb-5">
            <button
              className="btn border-blue-500 border-2"
              onClick={() => dispatch(setCartItems(product))}
            >
              AddToCart
            </button>
            <button
              className="btn bg-blue-500 "
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
