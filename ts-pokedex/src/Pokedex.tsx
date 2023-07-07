import { Pagination, PokemonGallery, SearchPokemon } from "./components"
import { useState } from 'react';

export const Pokedex = () => {
  
  const [page, setPage] = useState(0);
  console.log(page);
  return (
    <main className="main__container">
      <SearchPokemon />
      <PokemonGallery page={ page }/>
      <Pagination setPage={ setPage }/>
    </main>
  )
}
