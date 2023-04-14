import { createContext, useReducer, useState } from "react";

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
  // const [searchField, setSearchField] = useState("");
  const [{ searchField }, dispatch] = useReducer(searchReducer, INITIAL_STATE);

  const setSearchField = (value) => {
    dispatch({ type: SEARCH_ACTION_TYPES.SET_SEARCH_FIELD, payload: value });
  };

  const value = { searchField, setSearchField };

  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
};
