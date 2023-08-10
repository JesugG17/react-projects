import { useContext, ChangeEvent, FormEvent } from 'react';
import { SearchContext } from '../context/search/SearchContext';
import { useFilter } from './useFilter';
import { ALL_COUNTRIES } from '../constants/country.constants';

export const useSearch = () => {
    const { filter, setFilter } = useFilter();
    const { searchedCountry, setSearchedCountry } = useContext(SearchContext);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        if (value.length === 0) return setFilter({...filter, country: ALL_COUNTRIES});
    
        setSearchedCountry(value);
      }
    
      const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (searchedCountry.length === 0) return setFilter({ ...filter, country: ALL_COUNTRIES});
        
        setFilter({...filter, country: searchedCountry});
      }

    return {
        searchedCountry,
        filter,
        setFilter,
        handleChange,
        handleSubmit
    }
}
