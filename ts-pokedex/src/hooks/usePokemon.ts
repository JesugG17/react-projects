import { useQuery } from "@tanstack/react-query";
import { getPokemons } from "../utils/petitions";
import { useEffect, useState } from "react";
import { Pokemon } from "../types/pokemon-interface";

export const usePokemon = () => {

    const [page, setPage] = useState(0);

    const { data, isFetching, refetch, error } = useQuery(
        ["getPokemon"],
        () => getPokemons(page),
    );

    useEffect(() => {
        refetch();
    }, [page]);

    let pokemons: Pokemon[] = [];
    if (data) {
        pokemons = [...data];
    }

    return {
        pokemons,
        isLoading: isFetching,
        page,
        setPage,
        error
    }
};
