import { Header } from './components/Header';
import { Card } from './components/Card';
import { FiltersList } from './components/FiltersList';
import { useFilter } from './hooks/useFilter';

export const App = () => {
  const { filters, jobs } = useFilter();

  return (
    <>
      <Header />
      <main className="flex flex-col items-center bg-neutral-grayish-bg min-h-screen gap-5">
        {filters.length !== 0 && <FiltersList />}

        {jobs.map((job) => (
          <Card job={job} key={job.id} />
        ))}
      </main>
    </>
  );
};
