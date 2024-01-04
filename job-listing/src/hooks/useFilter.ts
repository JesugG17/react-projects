import { useContext } from "react"
import { FilterContext } from '../context/FilterContext';

export const useFilter = () => {
    const context = useContext(FilterContext);
    if (!context) {
        throw new Error('You must envolve you application into a FilterProvider');
    }

    return context;
}
