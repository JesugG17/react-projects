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
    <main className="h-screen flex flex-col items-center bg-slate-200 gap-1">
        <section className="w-3/4 flex flex-col p-4 gap-5">
            <h1 className="text-2xl mb-3 mt-2"><strong>Rapid</strong> Jobs</h1>
            <div className="h-[130px] bg-hero bg-no-repeat bg-center flex justify-center items-center rounded-md">
                <div className="w-3/4 h-2/5 bg-white p-1 flex justify-between rounded">
                    <input
                        className="w-3/4 bg-transparent focus:outline-none p-2"
                        placeholder="Title, companies, expertise or benefits"
                        type="text"
                    />
                    <button className="w-1/4 h-full bg-search px-4 py-1 rounded-md text-white font-bold">Search</button>
                </div>
            </div>
        </section>
        <section className="w-3/4 flex gap-3 p-4">
            <div className="w-1/4">
                <input type="checkbox"/>
                <label htmlFor=""> Full time</label>
                <h4>Location</h4>
                <input 
                    placeholder="City, state, zip code or country"
                    type="text" 
                />
                <ul>
                    <li>
                        <input type="radio" />
                        <label htmlFor="">London</label>
                    </li>
                    <li>
                        <input type="radio" />
                        <label htmlFor="">Amsterdam</label>
                    </li>
                    <li>
                        <input type="radio" />
                        <label htmlFor="">Amsterdam</label>
                    </li>
                    <li>
                        <input type="radio" />
                        <label htmlFor="">Berlin</label>
                    </li>
                </ul>
            </div>
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
                <footer className="flex justify-end gap-5 p-4">
                    <button onClick={() => {
                        setPage( page === 0 ? page : page -  1 );
                    }}>prev</button>
                    <button
                        onClick={() => {
                            setPage( page === 26 ? page : page + 1 );
                        }}
                    >
                        next</button>
                </footer>   
            </div>
        </section>
       
    </main>
  )
}
