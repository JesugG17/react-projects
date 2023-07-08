import { api } from "../api/api"
import { PokeAPIResponse } from "../types/pokeapi-response";
import { Pokemon } from "../types/pokemon-interface";


export const getPokemons = async(page: number) => {
    console.log(page);
    const offset = page * 8;
    const { data } = await api.get<PokeAPIResponse>(`?limit=8&offset=${offset}`);
    
    const pokemons = await Promise.all(
        data.results.map( async(result) => {
            const { data: pokemon } = await api.get<Pokemon>(`${result.name}`);
            
            return pokemon;
        })
    );
    
    return pokemons;
}