import { createContext, useReducer } from "react";
import { createAction } from "../utils/helper-func";

export const ProductsContext = createContext();

const INITIAL_STATE = {
  products: [],
  filteredProducts: [],
};

const PRODUCTS_ACTION_TYPES = {
  SET_PRODUCTS: "SET_PRODUCTS",
  SET_FILTERED_PRODUCTS: "SET_FILTERED_PRODUCTS",
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

    default:
      throw new Error(`Unhandled error type of ${type}`);
  }
};

export const ProductsProvider = ({ children }) => {
  const [{ products, filteredProducts }, dispatch] = useReducer(
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

  const value = {
    products,
    setProducts,
    filteredProducts,
    setFilteredProducts,
  };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
