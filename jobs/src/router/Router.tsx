import { createBrowserRouter, Navigate } from "react-router-dom";
import { JobsApp } from "../JobsApp";
import { JobView } from "../components/JobView";

export const Router = createBrowserRouter([
    {
        path: '/jobs',
        element: (
            <JobsApp />
        )
    },
    {
        path: '/jobs/:id',
        element: (
            <JobView />
        )
    },
    {
        path: '/*',
        element: (
            <Navigate to='/jobs'/>
        )
    }
])