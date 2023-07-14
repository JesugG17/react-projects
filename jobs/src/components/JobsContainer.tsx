import { Filters } from "./Filters";
import { Footer } from "./Footer";
import { JobCard } from "./JobCard";
import { useJobs } from '../hooks/useJobs';

export const JobsContainer = () => {

    const { jobs, setPage, offset, limit, maxPage, page } = useJobs();
    
  return (
    <section className="min-h-screen w-3/4 flex flex-col md:flex-row gap-3 p-4">
      <Filters />
      <div className="w-full sm:w-3/4">
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
