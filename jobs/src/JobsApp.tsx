import { useEffect, useState } from "react"
import { jobsApi } from "./api/jobs.api";
import { Job } from "./types/jobs.interface";

export const JobsApp = () => {

    const [page, setPage] = useState(0);

    const [jobs, setJobs] = useState<Job[]>( () => {
        const storage = localStorage.getItem('jobs') || '[]';

        return JSON.parse(storage);
    });

    useEffect(() => {
        if (jobs.length === 0) {
            jobsApi.get('')
            .then( ({ data }) => setJobs(data.data));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('jobs', JSON.stringify(jobs));
    }, [jobs]);

    const offset = page * 5;
    const limit = offset + 5;

  return (
    <div>
        <button
            onClick={() => setPage( page + 1) }
        >
            Siguiente pagina
        </button>
        <ul>
            {
                jobs.slice(offset, limit).map( job => (
                    <li>
                        {job.job_title}
                    </li>
                ))
            }
        </ul>
    </div>
  )
}
