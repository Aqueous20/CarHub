import { createContext, useContext, useState } from "react";

// Createing the context

export const SearchContext = createContext();

// the provider

export const SearchContextProvider = ({ children }) => {
  const [searchActive, setSearchActive] = useState(false);
  return (
    <SearchContext.Provider value={{searchActive, setSearchActive}}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearchContext = () => useContext(SearchContext);
