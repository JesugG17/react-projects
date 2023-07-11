import { useEffect, useState } from "react"
import { jobsApi } from "./api/jobs.api";
import { Job } from "./types/jobs.interface";
import { JobCard } from "./components/JobCard";

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
    <div className="w-full h-screen flex flex-col items-center bg-slate-200">
        <button
            className="px-2 py-4 bg-slate-300 rounded-md"
            onClick={() => setPage( page + 1) }
        >
            Siguiente pagina
        </button>
        <ul>
            {
                jobs.slice(offset, limit).map( job => (
                    <JobCard
                        job={ job }
                        key={ job.job_id }
                    />
                ))
            }
        </ul>
    </div>
  )
}
