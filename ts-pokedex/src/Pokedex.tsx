import { Pagination, PokemonGallery, SearchPokemon } from "./components"
import { usePokemon } from "./hooks/usePokemon";

export const Pokedex = () => {

  const { pokemons, isLoading, page, setPage } = usePokemon();
  
  return (
    <>
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
    </>
  )
}
