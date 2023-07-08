import { createBrowserRouter, Navigate } from "react-router-dom";
import { Pokedex } from "../Pokedex";
import { Pokemon } from "../components/Pokemon";

export const AppRouter = createBrowserRouter([
    {
        path: '/pokemon',
        element: (
            <Pokedex />
        ),
    },
    {
        path: '/pokemon/:id',
        element: (
            <Pokemon />
        )
    },
    {
        path: '/*',
        element: (
            <Navigate to='/pokemon'/>
        )
    }
]);