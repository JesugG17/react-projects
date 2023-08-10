import { useContext } from 'react'
import data from '../mocks/data.json';
import { ALL_COUNTRIES, ALL_REGIONS } from '../constants/country.constants';
import { FilterContext } from '../context/filter/FilterContext';

export const useFilter = () => {

    const { filter, setFilter } = useContext(FilterContext);

    const filterCountries = () => {
        if (filter.country == ALL_COUNTRIES && filter.region == ALL_REGIONS) return data;

        return data.filter(country => {
            return (
                (
                    filter.country === ALL_COUNTRIES ||
                    country.name.toLowerCase().trim().includes(filter.country.toLowerCase().trim()) 
                )
                &&
                (
                    filter.region === ALL_REGIONS ||
                    country.region === filter.region
                )
                
            )
        });
    }

    const filteredCountries = filterCountries();

    return {
        countries: filteredCountries,
        filter,
        setFilter
    }
}
