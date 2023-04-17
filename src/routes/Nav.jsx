import React, { useContext } from "react";
import { Outlet, NavLink, useNavigate } from "react-router-dom";
import { SearchContext } from "../contexts/SearchContext";
import Categories from "../components/Categories";
import { BsCart4 } from "react-icons/bs";
import { ProductsContext } from "../contexts/products-context";

const Nav = () => {
  const { searchField, setSearchField } = useContext(SearchContext);
  const { cartItems, setCartItems } = useContext(ProductsContext);
  console.log(cartItems)

  const changeHandler = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchField(value);
  };

  const nav = useNavigate();

  const clickHandler = () => {
    nav("items");
  };

  return (
    <>
      <div className=" flex justify-between items-center">
        <h1 className=" text-4xl font-bold" onClick={() => nav("/")}>
          Logo
        </h1>
        <div className=" flex items-center gap-10">
          <input
            type="search"
            className=" border-2 outline-0"
            onChange={changeHandler}
          />
          <div>
            <BsCart4 className=" text-5xl relative cursor-pointer" onClick={clickHandler} />
            <span
              className=" font-bold absolute top-0 end-[105px] rounded-full bg-cyan-400 w-[25px] h-[25px] text-center"
              style={{ lineHeight: "25px" }}
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
