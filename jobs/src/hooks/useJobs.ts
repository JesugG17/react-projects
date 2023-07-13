import { useContext, useEffect, useState } from "react"
import { JobsContext } from "../context/JobsContext"
import { Filter } from "../types/filter.type";

export const useJobs = () => {
    const { jobs, setJobs } = useContext(JobsContext);
    const [allJobs] = useState(jobs);
    const [page, setPage] = useState(() => {
        const storage = localStorage.getItem('page');
  
        return Number(storage) ?? 0;
    });
    const offset = page * 5;
    const limit = offset + 5;
    const maxPage = Math.floor(jobs.length / 5);

    useEffect(() => {
      localStorage.setItem('page', String(page));
    }, [page]);

    
    const filterJobs = (filter: Filter) => {

        localStorage.setItem('page', String(0));
        if (filter.value === 'all') return setJobs(allJobs);

        const newJobs = allJobs.filter( job => {
            const { filterBy, value } = filter;

            return job[filterBy] === value;
        });
        setJobs(newJobs);
    }

    return {
        jobs,
        limit,
        offset,
        maxPage,
        page,
        setPage,
        allJobs,
        filterJobs
    }

}
