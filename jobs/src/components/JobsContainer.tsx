import { Filters } from "./Filters";
import { Footer } from "./Footer";
import { JobCard } from "./JobCard";
import { useJobs } from '../hooks/useJobs';

export const JobsContainer = () => {

    const { jobs, setPage, offset, limit, maxPage, page } = useJobs();
    
    console.log({page});
  return (
    <section className="min-h-screen w-3/4 flex gap-3 p-4">
      <Filters />
      <div className="w-3/4">
        <ul>
          {jobs.slice(offset, limit).map((job) => (
            <JobCard key={job.job_id} job={job} />
          ))}
        </ul>
        <Footer 
          setPage={setPage} 
          currentPage={ page }
          maxPage={ maxPage }
        />
      </div>
    </section>
  );
};
