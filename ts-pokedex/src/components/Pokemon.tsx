import { useEffect, useState } from "react";
import { useLocation, useNavigate } from 'react-router-dom';

import { Pokemon as PokemonType } from "../types/pokemon-interface";
import { getPokemonById } from "../utils/petitions";
import { Spinner } from "./Icons";

export const Pokemon = () => {

    const navigate = useNavigate();
    const [pokemon, setPokemon] = useState<PokemonType>();
    const location = useLocation();
    const [pokemonName] = location.pathname.split("/").slice(2);

    useEffect(() => {
        getPokemonById(pokemonName).then((data) => setPokemon(data));
    }, []);

    if (!pokemon) {
        return (
        <section className="spinner">
            <p>
            <Spinner />
            </p>
        </section>
        );
    }

return (
    <section className="pokemon__container">
    <div className="pokemon__card__personal">
        <img src={pokemon.sprites.front_default} alt="" />
        <div>
            <p>id: {pokemon.id}</p>
            <p>name: {pokemon.name}</p>
            <p>experience: {pokemon.base_experience}</p>
            <p>height: {pokemon.height}</p>
            <button
                onClick={() => navigate(-1)}
            >
                Back
            </button>
        </div>
    </div>
    </section>
);
};
