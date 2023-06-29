import React, { createContext } from 'react'
import { Filters } from '../hooks/useFilter';

type FilterContextType = {
    filters: Filters;
    setFilters:  React.Dispatch<React.SetStateAction<Filters>>
}

export const FiltersContext = createContext<FilterContextType>({} as FilterContextType);