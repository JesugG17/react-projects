import { useEffect, useState } from "react"
import { jobsApi } from "./api/jobs.api";
import { Job } from "./types/jobs.interface";
import { JobCard } from "./components/JobCard";
import { Header } from "./components/Header";
import { Filters } from "./components/Filters";
import { Footer } from './components/Footer';

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
    <main className="flex flex-col items-center bg-slate-200 gap-1">
        <Header />
        <section className="w-3/4 flex gap-3 p-4">
            <Filters />
            <div className="w-3/4">
                <ul>
                    {
                        jobs.slice(offset, limit).map( job => (
                            <JobCard 
                                job={ job }
                            />
                        ))
                    }
                </ul>
                <Footer setPage={ setPage }/>
            </div>
        </section>
       
    </main>
  )
}
