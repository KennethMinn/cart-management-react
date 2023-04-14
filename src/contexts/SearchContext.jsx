import { createContext, useReducer, useState } from "react";
import { createAction } from "../utils/helper-func";

export const SearchContext = createContext();

const SEARCH_ACTION_TYPES = {
  SET_SEARCH_FIELD: "SET_SEARCH_FIELD",
};

const INITIAL_STATE = {
  searchField: "",
};

const searchReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case SEARCH_ACTION_TYPES.SET_SEARCH_FIELD:
      return {
        ...state,
        searchField: payload,
      };

    default:
      throw new Error(`unhandled error type of ${type}`);
  }
};

export const SearchProvider = ({ children }) => {
  const [{ searchField }, dispatch] = useReducer(searchReducer, INITIAL_STATE);

  const setSearchField = (value) => {
    dispatch(createAction(SEARCH_ACTION_TYPES.SET_SEARCH_FIELD, value));
  };

  const value = { searchField, setSearchField };

  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
};
