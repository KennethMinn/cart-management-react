import React, { useContext } from "react";
import { Outlet, NavLink } from "react-router-dom";
import { SearchContext } from "../contexts/SearchContext";

const Nav = () => {
  const { searchField, setSearchField } = useContext(SearchContext);
  const changeHandler = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchField(value);
  };
  return (
    <>
      <div className=" flex justify-between items-center">
        <h1 className=" text-4xl">Logo</h1>
        <input
          type="search"
          className=" border-2 outline-0"
          onChange={changeHandler}
        />
      </div>
      <Outlet />
    </>
  );
};

export default Nav;
