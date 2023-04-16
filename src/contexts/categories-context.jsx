import { createContext, useReducer } from "react";
import { createAction } from "../utils/helper-func";

export const CategoriesContext = createContext();

const INITIAL_STATE = {
  categories: [],
};

const CATEGORIES_ACTION_TYPES = {
  SET_CATEGORIES: "SET_CATEGORIES",
};

const categoriesReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case CATEGORIES_ACTION_TYPES.SET_CATEGORIES:
      return {
        ...state,
        categories: payload,
      };

    default:
      throw new Error(`Unhandled error type of ${type}`);
  }
};

export const CategoriesProvider = ({ children }) => {
  const [{ categories }, dispatch] = useReducer(
    categoriesReducer,
    INITIAL_STATE
  );
  
  const setCategories = (newCategories) => {
    dispatch(
      createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES, newCategories)
    );
  };

  const value = { categories, setCategories };

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
