import { useContext, useState } from 'react';
import { JobsContext } from "../context/JobsContext";
import { Filters } from "./Filters";
import { Footer } from "./Footer";
import { JobCard } from "./JobCard";

export const JobsContainer = () => {

    const [page, setPage] = useState(0);
    const { jobs } = useContext(JobsContext);
    const offset = page * 5;
    const limit = offset + 5;

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
