import { createContext } from 'react'
import { Job } from '../types/jobs.interface';

interface JobsContextType {
    jobs: Job[];
    setJobs: React.Dispatch<React.SetStateAction<Job[]>>;
    page: number;
    setPage: React.Dispatch<React.SetStateAction<number>>;
    loading: boolean;
} 

export const JobsContext = createContext<JobsContextType>({} as JobsContextType);