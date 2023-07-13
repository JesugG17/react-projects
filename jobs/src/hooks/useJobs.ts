import { useContext, useEffect, useState } from "react"
import { JobsContext } from "../context/JobsContext"
import { Filter } from "../types/filter.type";

export const useJobs = () => {
    const { jobs, setJobs, page, setPage } = useContext(JobsContext);
    const [allJobs] = useState(jobs);

    const offset = page * 5;
    const limit = offset + 5;
    const maxPage = Math.floor(jobs.length / 5);
    
    const filterJobs = (filter: Filter) => {
        
        if (filter.value === 'all') return setJobs(allJobs);
        
        const newJobs = allJobs.filter( job => {
            const { filterBy, value } = filter;
            
            return job[filterBy] === value;
        });
        setPage(0);
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
