import { useState, useEffect } from 'react';
import { Filters } from "./Filters";
import { Footer } from "./Footer";
import { JobCard } from "./JobCard";
import { useJobs } from '../hooks/useJobs';

export const JobsContainer = () => {

    const [page, setPage] = useState(() => {
      const storage = localStorage.getItem('page');

      return Number(storage) ?? 0;
    });
    
    const { jobs } = useJobs();
    const offset = page * 5;
    const limit = offset + 5;
    console.log(jobs);
    useEffect(() => {
      localStorage.setItem('page', String(page));
    }, [page]);

  return (
    <section className="w-3/4 flex gap-3 p-4">
      <Filters />
      <div className="w-3/4">
        <ul>
          {jobs.slice(offset, limit).map((job) => (
            <JobCard key={job.job_id} job={job} />
          ))}
        </ul>
        <Footer setPage={setPage} />
      </div>
    </section>
  );
};
