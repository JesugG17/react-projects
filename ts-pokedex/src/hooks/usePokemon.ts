import { useQuery } from "@tanstack/react-query";
import { getPokemons } from "../utils/petitions";
import { useState } from "react";
import { Pokemon } from "../types/pokemon-interface";

export const usePokemon = () => {

    const [page, setPage] = useState(0);
    const { data, isFetching, refetch, error } = useQuery({
        queryKey: ["getPokemon"],
        queryFn: () => getPokemons(page),
    });


    console.log(typeof refetch);
    let pokemons: Pokemon[] = [];
    if (data) {
        pokemons = [...data];
    }

    return {
        pokemons,
        isLoading: isFetching,
        refetch,
        setPage,
        error
    }
};
