import { createContext } from 'react';
import { Job } from '../interfaces/job.interface';

type ContextSchema = {
  filters: string[];
  jobs: Job[];
  addFilter: (newFilter: string) => void;
  removeFilter: (filterToRemove: string) => void;
  clearFilters: () => void;
};

export const FilterContext = createContext<ContextSchema>({} as ContextSchema);
