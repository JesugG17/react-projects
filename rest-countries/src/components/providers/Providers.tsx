import { PropsWithChildren, FC } from 'react';
import { SearchProvider } from '../../context/search/SearchProvider';
import { FilterProvider } from '../../context/filter/FilterProvider';
import { Router } from "./Router"

export const Providers: FC<Props> = ({ children }) => {
  return (
    <Router>
        <FilterProvider>
            <SearchProvider>
                { children }
            </SearchProvider>
        </FilterProvider>
    </Router>
  )
}

type Props = PropsWithChildren;
