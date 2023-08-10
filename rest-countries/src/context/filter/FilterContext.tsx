import { createContext } from 'react';
import { Filters } from '../../types';

type ContextType = {
    filter: Filters;
    setFilter: React.Dispatch<React.SetStateAction<Filters>>;
}

export const FilterContext = createContext<ContextType>({} as ContextType);