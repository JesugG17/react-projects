import { useContext, useState } from "react"
import { JobsContext } from "../context/JobsContext"
import { Filter } from "../types/filter.type";
import { Job } from "../types/jobs.interface";

export const useJobs = () => {
    const { jobs } = useContext(JobsContext);
    const [filteredJobs, setFilteredJobs] = useState<Job[]>(jobs);
    const filterJobs = (filter: Filter) => {

        if (filter.value === 'all') return setFilteredJobs(jobs)

        const newJobs = jobs.filter( job => {
            const { filterBy, value } = filter;

            return job[filterBy] === value;
        });

        setFilteredJobs(newJobs);
    }

    return {
        jobs: filteredJobs,
        filterJobs
    }

}
