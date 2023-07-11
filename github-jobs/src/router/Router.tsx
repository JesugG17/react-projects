import { createBrowserRouter } from "react-router-dom";
import { GithubJobs } from '../GithubJobs';
import { Job } from "../components/Job";


export const router = createBrowserRouter([
    {
        path: '/jobs',
        element: (
            <GithubJobs />
        )
    },
    {
        path: '/jobs/:id',
        element: (
            <Job />
        )
    }
])