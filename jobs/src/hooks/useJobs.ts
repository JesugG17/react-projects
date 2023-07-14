import { useContext, useState } from "react"
import { JobsContext } from "../context/JobsContext"

export const useJobs = () => {
    const { jobs, setJobs, page, setPage, loading } = useContext(JobsContext);
    const [allJobs] = useState(jobs);

    const offset = page * 5;
    const limit = offset + 5;
    const maxPage = Math.floor(jobs.length / 5);
    
    const filterJobs = (value: string) => {
        
        setPage(0);
        if (value === 'all cities' || value === 'all') return setJobs(allJobs);
        
        const newJobs = allJobs.filter( job => {

            const normalizedValue = value.toLowerCase();

            return (
                job.employer_name.toLowerCase().includes(normalizedValue) ||
                job.job_employment_type.toLowerCase().includes(normalizedValue) ||
                job.job_title.toLowerCase().includes(normalizedValue)
            )
        });
        
        setJobs(newJobs);
    }

    const filterJobsByCity = (city: string) => {
        
        setPage(0);
        if (city.length === 0 || city == 'all cities') return setJobs(allJobs);

        const jobsFiltered = allJobs.filter( job => {
            return job.job_city?.toLowerCase().includes(city);
        });

        setJobs(jobsFiltered);
    }

    return {
        jobs,
        limit,
        offset,
        maxPage,
        page,
        setPage,
        allJobs,
        filterJobs,
        filterJobsByCity,
        loading
    }

}
