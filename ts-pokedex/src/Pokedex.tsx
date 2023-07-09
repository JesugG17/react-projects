import { Pagination, SearchPokemon } from "./components"
import { usePokemon } from "./hooks/usePokemon";

export const Pokedex = () => {

  const { pokemons, isLoading, page, setPage } = usePokemon();


  return (
    <>
      <SearchPokemon 
        pokemons={ pokemons }
        isLoading={ isLoading }
        page={ page }
      />
    
      <Pagination 
        isLoading={ isLoading }
        page={ page }
        setPage={ setPage }
      />
    </>
  )
}
