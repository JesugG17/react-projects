import { api } from "../api/api"
import { PokeAPIResponse } from "../types/pokeapi-response";
import { Pokemon } from "../types/pokemon-interface";


export const getPokemons = async(page: number) => {
    console.log(page);
    const offset = page * 8;
    const { data } = await api.get<PokeAPIResponse>(`?limit=8&offset=${offset}`);
    
    const pokemons: Pokemon[] = [];

    for (let i = 0; i < data.results.length; i++) {
        const { data: pokemon } = await api.get<Pokemon>(`${data.results[i].name}`);

        pokemons.push(pokemon);
        
    }
    
    return pokemons;
}