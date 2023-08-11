import { PropsWithChildren, FC, useState } from "react";
import { SearchContext } from "./SearchContext";

export const SearchProvider: FC<Props> = ({ children }) => {
  const [searchedCountry, setSearchedCountry] = useState("");

  return (
    <SearchContext.Provider
      value={{
        searchedCountry,
        setSearchedCountry,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

type Props = PropsWithChildren;
