import { FC, useState } from "react"
import { FiltersContext } from "./FiltersContext"
import { Filters } from '../hooks/useFilter';

export const FiltersProvider: FC<Props> = ({ children }) => {
    
    const [filters, setFilters] = useState<Filters>({
        category: 'all',
        minPrice: 0
    })
  
    return (
    <FiltersContext.Provider value={{
        filters,
        setFilters
    }}>
        { children }
    </FiltersContext.Provider>
  )
}

type Props = {
    children: React.ReactNode
}
