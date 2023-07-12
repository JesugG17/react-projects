import { PropsWithChildren, FC, useState, useEffect } from 'react';
import { JobsContext } from './JobsContext';
import { jobsApi } from '../api/jobs.api';
import { Job } from '../types/jobs.interface';

export const JobsProvider: FC<Props> = ({ children }) => {
  
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
  
return (
    <JobsContext.Provider value={{
        jobs,
    }}>
        { children }
    </JobsContext.Provider>
  )
}

type Props = PropsWithChildren
