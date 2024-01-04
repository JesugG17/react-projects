import { PropsWithChildren, FC, useState } from 'react';
import { FilterContext } from './FilterContext';
import initialState from '../mocks/data.json';
import { Job } from '../interfaces/job.interface';

export const FilterProvider: FC<Props> = ({ children }) => {
  const [jobs, setJobs] = useState<Job[]>(initialState);
  const [filters, setFilters] = useState<string[]>([]);

  const addFilter = (newFilter: string) => {
    const filterAlreadyExist = filters.some((filter) => filter === newFilter);

    if (filterAlreadyExist) return;

    const newFilters = [newFilter, ...filters];

    const newJobs = filterJobs(newFilters);

    setJobs([...newJobs]);
    setFilters((prevState) => [newFilter, ...prevState]);
  };

  const removeFilter = (filterToRemove: string) => {
    const newFilters = filters.filter((filter) => filter !== filterToRemove);
    const newJobs = filterJobs(newFilters);

    setJobs([...newJobs]);
    setFilters([...newFilters]);
  };

  const clearFilters = () => {
    setJobs(initialState);
    setFilters([]);
  };

  const filterJobs = (filters: string[]) => {
    if (filters.length === 0) return initialState;

    const newJobs = initialState.filter((job) =>
      filters.every((filter) => job.role === filter || job.level === filter || job.tools.includes(filter) || job.languages.includes(filter))
    );

    return newJobs;
  };

  return (
    <FilterContext.Provider
      value={{
        jobs,
        filters,
        addFilter,
        clearFilters,
        removeFilter,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

type Props = PropsWithChildren;
