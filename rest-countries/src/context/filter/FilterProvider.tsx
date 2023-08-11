import { useState, PropsWithChildren, FC } from "react";
import { ALL_COUNTRIES, ALL_REGIONS } from "../../constants/country.constants";
import { Filters } from "../../types";
import { FilterContext } from "./FilterContext";

export const FilterProvider: FC<Props> = ({ children }) => {
  const [filter, setFilter] = useState<Filters>({
    country: ALL_COUNTRIES,
    region: ALL_REGIONS,
  });

  return (
    <FilterContext.Provider
      value={{
        filter,
        setFilter,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

type Props = PropsWithChildren;
