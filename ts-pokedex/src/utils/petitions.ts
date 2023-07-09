import { api } from "../api/api"
import { PokeAPIResponse } from "../types/pokeapi-response";
import { Pokemon } from "../types/pokemon-interface";


export const getPokemons = async(page: number) => {
    const offset = page * 8;
    const { data } = await api.get<PokeAPIResponse>(`pokemon?limit=8&offset=${offset}`);
    
    const pokemons = await Promise.all(
        data.results.map( async(result) => {
            const { data: pokemon } = await api.get<Pokemon>(`pokemon/${result.name}`);
            
            return pokemon;
        })
    );
    
    return pokemons;
}

export const getPokemonById = async(pokemonName: string) => {
    const { data } = await api.get<Pokemon>(`pokemon/${pokemonName}`);
    
    return data;
}