import { Pagination, PokemonGallery, SearchPokemon } from "./components"

export const Pokedex = () => {
  return (
    <main className="main__container">
      <SearchPokemon />
      <PokemonGallery />
      <Pagination />
    </main>
  )
}
