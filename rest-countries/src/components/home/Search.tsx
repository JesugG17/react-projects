import { useState, FormEvent, ChangeEvent } from 'react';
import { SearchIcon } from "../ui/Icons"
import { useFilter } from "../../hooks/useFilter";
import { ALL_COUNTRIES } from "../../constants/country.constants";

export const Search = () => {

  const { filter, setFilter } = useFilter();
  const [formState, setFormState] = useState('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (value.length === 0) return setFilter({...filter, country: ALL_COUNTRIES});

    setFormState(value);
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (formState.length === 0) return setFilter({ ...filter, country: ALL_COUNTRIES});
    
    setFilter({...filter, country: formState});
  }


  return (
    <section className="px-7 py-4 bg-primary-dark shadow-lg rounded-lg lg:w-2/5">
        <form
          onSubmit={handleSubmit} 
          className="flex gap-5 items-center justify-center"
        >
          <button>
              <SearchIcon />
          </button>
          <input 
              className="bg-transparent flex-1 text-white font-medium text-xs focus:outline-none md:text-base"
              placeholder="Search for a country.." 
              type="text"
              onChange={handleChange} 
          />
        </form>
    </section>
  )
}
