import { useQuery } from "@tanstack/react-query";
import { getPokemons } from "../utils/petitions";
import { useEffect, useState } from "react";
import { Pokemon } from "../types/pokemon-interface";

export const usePokemon = () => {

    const [page, setPage] = useState(() => {
        const storage = localStorage.getItem('page');
        return Number(storage) ?? 0;
    });
    
    const { data, isFetching, refetch, error } = useQuery(
        ["getPokemon"],
        () => getPokemons(page),
    );
    
    useEffect(() => {
        const storage = localStorage.getItem('page') || 0;
        if (storage !== 0) {
            setPage(Number(storage));
        }
    }, []);

    useEffect(() => {
        refetch();
        localStorage.setItem('page', String(page));
    }, [page]);


    let pokemons: Pokemon[] = []
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
