import { createContext, useEffect, useReducer, useState } from "react";
import { createAction } from "../utils/helper-func";

export const ProductsContext = createContext();

const INITIAL_STATE = {
  products: [],
  filteredProducts: [],
  cartItems: [],
};

const PRODUCTS_ACTION_TYPES = {
  SET_PRODUCTS: "SET_PRODUCTS",
  SET_FILTERED_PRODUCTS: "SET_FILTERED_PRODUCTS",
  SET_CART_ITEMS: "SET_CART_ITEMS",
};

const productsReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case PRODUCTS_ACTION_TYPES.SET_PRODUCTS:
      return {
        ...state,
        products: payload,
      };

    case PRODUCTS_ACTION_TYPES.SET_FILTERED_PRODUCTS:
      return {
        ...state,
        filteredProducts: payload,
      };
    case PRODUCTS_ACTION_TYPES.SET_CART_ITEMS:
      const isExisted = state.cartItems.find((item) => item.id === payload.id);
      if (isExisted) return state;

      return {
        ...state,
        cartItems: [...state.cartItems, { ...payload, quantity: 1 }],
      };

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== payload.id),
      };

    default:
      throw new Error(`Unhandled error type of ${type}`);
  }
};

export const ProductsProvider = ({ children }) => {
  const [{ products, filteredProducts, cartItems }, dispatch] = useReducer(
    productsReducer,
    INITIAL_STATE
  );

  const setProducts = (newProducts) => {
    dispatch(createAction(PRODUCTS_ACTION_TYPES.SET_PRODUCTS, newProducts));
  };

  const setFilteredProducts = (newFilterProducts) => {
    dispatch(
      createAction(
        PRODUCTS_ACTION_TYPES.SET_FILTERED_PRODUCTS,
        newFilterProducts
      )
    );
  };

  const setCartItems = (newCartItems) => {
    dispatch({
      type: PRODUCTS_ACTION_TYPES.SET_CART_ITEMS,
      payload: newCartItems,
    });
  };

  const removeItemFromCart = (item) => {
    dispatch(createAction("REMOVE_FROM_CART", item));
  };

  const value = {
    products,
    setProducts,
    filteredProducts,
    setFilteredProducts,
    cartItems,
    setCartItems,
    removeItemFromCart,
  };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
