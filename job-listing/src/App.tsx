import { Header } from './components/Header';
import jobs from './mocks/data.json';
import { Card } from './components/Card';

export const App = () => {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center bg-neutral-grayish-bg h-screen">
        {jobs.map((job) => (
          <Card job={job} />
        ))}
      </main>
    </>
  );
};
