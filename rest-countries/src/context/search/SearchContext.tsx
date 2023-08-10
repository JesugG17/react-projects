import { createContext } from "react";

type ContexType = {
    searchedCountry: string;
    setSearchedCountry: React.Dispatch<React.SetStateAction<string>>;
}

export const SearchContext = createContext<ContexType>({} as ContexType);