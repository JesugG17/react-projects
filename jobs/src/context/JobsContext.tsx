import { createContext } from 'react'
import { Job } from '../types/jobs.interface';

interface JobsContextType {
    jobs: Job[];
    setJobs: React.Dispatch<React.SetStateAction<Job[]>>;
} 

export const JobsContext = createContext<JobsContextType>({} as JobsContextType);