import { useEffect, useState, FC } from "react";
import { getPokemons } from "../utils/petitions";
import { useQuery } from "@tanstack/react-query";
import { Pokemon } from "../types/pokemon-interface";

export const PokemonGallery: FC<Props> = ({ pokemons, isLoading }) => {

  
  if (isLoading) {
    return <h1>Cargando...</h1>
  }

  return (
    <section className="gallery__container">
      {pokemons.map((pokemon) => (
        <div className="pokemon__card" key={pokemon.id}>
          <img
            src={pokemon.sprites.front_default}
            alt={`${pokemon.name} image`}
          />
          <footer>
            <strong>{pokemon.name}</strong>
          </footer>
        </div>
      ))}
    </section>
  );
};

type Props = {
  pokemons: Pokemon[];
  isLoading: boolean;
};
