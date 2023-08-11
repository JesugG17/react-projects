import { useFilter } from "../../hooks/useFilter";
import { useTheme } from "../../hooks/useTheme";
import { getAllRegions } from "../../utils";
import { ChangeEvent } from 'react';

export const Filter = () => {

  const { filter, setFilter } = useFilter();
  const allRegions = getAllRegions();
  const { isDarkTheme } = useTheme();

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const region = event.target.value;
    setFilter({
      ...filter,
      region
    })
  }

  return (
    <section className="w-3/5 md:w-1/4 lg:w-1/5">
        <select
            onChange={handleChange}
            className={`w-full p-4 text-xs shadow-lg md:text-base rounded-lg ${ isDarkTheme && 'bg-primary-dark text-white'}`} 
            placeholder="Filter by region"
        >
            {
              allRegions.map( region => (
                <option key={region} value={region}>{region}</option>
              ))
            }
        </select>
    </section>
  )
}
