import { useEffect, useState, FC } from "react";
import { getPokemons } from "../utils/petitions";
import { Pokemon } from "../types/pokemon-interface";


export const PokemonGallery: FC<Props> = ({ page }) => {

  const [pokemon, setPokemon] = useState<Pokemon[]>([]);
  
  useEffect(() => {
    handleGetPokemons();
  },[page]);

  const handleGetPokemons = async() => {
    console.log({ page });
    const newPokemons = await getPokemons(page);

    setPokemon(newPokemons);
  }

  if (pokemon.length === 0) {
     return  <h1>Cargando...</h1>
  }

  return (
    <section className="gallery__container">
        {
          pokemon.map( pokemon => (
            <div
              className="pokemon__card"
              key={pokemon.id}
            >
              <img 
                src={pokemon.sprites.front_default} 
                alt={`${pokemon.name} image`} 
              />
              <footer>
                <strong>{ pokemon.name }</strong>
              </footer>
            </div>
          ))
        }
    </section>
  )
}

type Props = {
  page: number;
}