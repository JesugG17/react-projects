import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { SearchIcon } from './Icons';

export const SearchPokemon = () => {

    const [input, setInput] = useState(() => {
        const storage = localStorage.getItem('input') || '';

        return storage;
    });

    useEffect(() => {
        localStorage.setItem('input', input);
    }, [input])
    
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    }
    

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInput(event.target.value);
    }

  return (
    <header className="search__container">
        <div className='search'>
            <form onSubmit={handleSubmit}>
                <SearchIcon />
                <input 
                    type="text"
                    placeholder='Search'
                    value={ input }
                    onChange={handleChange}
                />
            </form>
        </div>
    </header>
  )
}
