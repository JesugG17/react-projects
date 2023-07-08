import { useEffect, useState } from "react";
import { useLocation, useNavigate } from 'react-router-dom';

import { Pokemon as PokemonType } from "../types/pokemon-interface";
import { getPokemonById } from "../utils/petitions";
import { Spinner } from "./Icons";
import { TYPE_COLOR, TypeKey } from "../utils/color-footer";

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

    const color = TYPE_COLOR[pokemon.types[0].type.name as TypeKey];

return (
    <section className="pokemon__container">
    <div className="pokemon__card__personal">
        <div className="pokemon__card__info">
            <img src={pokemon.sprites.front_default} alt="" />
            <div className="info">
                <p>Id: {pokemon.id}</p>
                <p>Name: {pokemon.name}</p>
                <p>Experience: {pokemon.base_experience} poins</p>
                <p>Height: {pokemon.height}</p>
                <p>Type: {pokemon.types[0].type.name}</p>
                <div>
                    <button
                        style={{
                            backgroundColor: color
                        }}
                        onClick={() => navigate(-1)}
                    >
                        Back
                    </button>
                </div>
            </div>
        </div>
        <footer
            style={{
                backgroundColor: TYPE_COLOR[pokemon.types[0].type.name as TypeKey]
            }} 
        >
        </footer>
    </div>
    </section>
);
};
