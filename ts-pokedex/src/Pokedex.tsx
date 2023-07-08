import { Pagination, PokemonGallery, SearchPokemon } from "./components"
import { usePokemon } from "./hooks/usePokemon";

export const Pokedex = () => {

  const { pokemons, isLoading, page, setPage } = usePokemon();
  
  return (
    <main className="main__container">
      <SearchPokemon />
      <PokemonGallery 
        pokemons={ pokemons }
        isLoading={ isLoading }
      />
      <Pagination 
        isLoading={ isLoading }
        page={ page }
        setPage={ setPage }
      />
    </main>
  )
}
