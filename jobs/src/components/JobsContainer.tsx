import { Filters } from "./Filters";
import { Footer } from "./Footer";
import { JobCard } from "./JobCard";
import { useJobs } from '../hooks/useJobs';
import { Loading } from "./Loading";

export const JobsContainer = () => {

    const { jobs, setPage, offset, limit, maxPage, page, loading } = useJobs();

    if (loading) {
      return <Loading />
    }
    
  return ( 
    <section className="min-h-screen w-3/4 flex flex-col md:flex-row gap-3 p-4">
      <Filters />
      <div className="w-full sm:w-3/4">
        <ul>
          {
            jobs.length === 0 &&
            (
              <div className="flex justify-center">
                <h3 className="text-violet-custom text-[24px] font-bold">No jobs found</h3>
              </div>
            )
          }
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
