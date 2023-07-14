import { PropsWithChildren, FC, useState, useEffect } from 'react';
import { JobsContext } from './JobsContext';
import { jobsApi } from '../api/jobs.api';
import { Job } from '../types/jobs.interface';

export const JobsProvider: FC<Props> = ({ children }) => {
  
    const [jobs, setJobs] = useState<Job[]>( () => {
        const storage = localStorage.getItem('jobs') || '[]';

        return JSON.parse(storage);
    });

    const [page, setPage] = useState(() => {
        const storage = localStorage.getItem('page');
        return Number(storage) ?? 0;
    });

    const [loading, setLoading] = useState(jobs.length === 0);

    useEffect(() => {
        localStorage.setItem('page', String(page));
    }, [page]);
    
    useEffect(() => {
        if (jobs.length === 0) {
            jobsApi.get('')
            .then( ({ data }) => {
                setJobs(data.data);
                localStorage.setItem('jobs', JSON.stringify(data.data));
                setLoading(false);
            });
        }
    }, []);
      
return (
    <JobsContext.Provider value={{
        jobs,
        setJobs,
        page,
        setPage,
        loading
    }}>
        { children }
    </JobsContext.Provider>
  )
}

type Props = PropsWithChildren
