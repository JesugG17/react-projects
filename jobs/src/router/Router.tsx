import { createBrowserRouter, Navigate } from "react-router-dom";
import { JobsApp } from "../JobsApp";
import { Job } from "../components/Job";

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
            <Job />
        )
    },
    {
        path: '/*',
        element: (
            <Navigate to='/jobs'/>
        )
    }
])