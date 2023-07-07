import { PokedexIcon, SearchIcon } from './Icons';

export const SearchPokemon = () => {
  return (
    <header className="search__container">
        <nav>
            <PokedexIcon />
            <h1>Pokedex</h1>
        </nav>
        <div className='search'>
            <form>
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
