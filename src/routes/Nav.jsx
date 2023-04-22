import React, { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, NavLink, useNavigate } from 'react-router-dom';
import Categories from '../components/Categories';
import { BsCart4 } from 'react-icons/bs';
import { setSearchField } from '../store/search/search-reducer';
import { selectCartItems } from '../store/products/product-selector';

const Nav = () => {
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();

  const changeHandler = e => {
    const value = e.target.value.toLowerCase();
    dispatch(setSearchField(value));
  };

  const nav = useNavigate();

  const clickHandler = () => {
    nav('items');
  };

  return (
    <>
      <div className=" flex justify-between items-center">
        <h1
          className=" text-4xl font-bold cursor-pointer"
          onClick={() => nav('/')}
        >
          Logo
        </h1>
        <div className=" flex items-center gap-10">
          <input
            type="search"
            placeholder="search"
            className=" border-2 outline-0 px-2 py-1 rounded-md"
            onChange={changeHandler}
          />
          <div>
            <BsCart4
              className=" text-5xl relative cursor-pointer"
              onClick={clickHandler}
            />
            <span
              className=" font-bold absolute top-0 end-[105px] rounded-full bg-cyan-400 w-[25px] h-[25px] text-center"
              style={{ lineHeight: '25px' }}
            >
              {cartItems.length}
            </span>
          </div>
        </div>
      </div>
      <Categories />
      <Outlet />
    </>
  );
};

export default Nav;
