import { FormEvent } from 'react';
import { SearchIcon } from './Icons';

export const SearchPokemon = () => {

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    }

  return (
    <header className="search__container">
        <div className='search'>
            <form onSubmit={handleSubmit}>
                <SearchIcon />
                <input 
                    type="text"
                    placeholder='Search'
                />
            </form>
        </div>
    </header>
  )
}
