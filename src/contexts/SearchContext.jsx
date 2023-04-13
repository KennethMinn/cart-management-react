import { createContext, useState } from "react";

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searchField, setSearchField] = useState("");
  const value = { searchField, setSearchField };

  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
};
