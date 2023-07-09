import { ChangeEvent, FC, useEffect, useState } from 'react';
import { SearchIcon } from './Icons';
import { Pokemon } from '../types/pokemon-interface';
import { PokemonGallery } from '.';

export const SearchPokemon: FC<Props> = ({ pokemons, isLoading, page }) => {

    const [pokemonsFiltered, setPokemonsFiltered] = useState<Pokemon[]>([]);
    const [input, setInput] = useState(() => {
        const storage = localStorage.getItem('input') || '';

        return storage;
    });


    useEffect(() => {
        setPokemonsFiltered(pokemons);
    }, [pokemons]);

    useEffect(() => {
        localStorage.setItem('input', input);
    }, [input])

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInput(event.target.value);
        const newPokemons = pokemonsFiltered.filter( pokemon => pokemon.name.includes(event.target.value));
        console.log(newPokemons);
        // setPokemonsFiltered(newPokemons);
    }

  return (
    <>
        <header className="search__container">
            <div className='search'>
                <form onSubmit={(event) => event.preventDefault()}>
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
        <PokemonGallery 
            pokemons={ pokemons }
            isLoading={ isLoading }
        />
    </>
  )
}

type Props = {
    pokemons: Pokemon[];
    isLoading: boolean;
    page: number;
}
