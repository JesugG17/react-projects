import { FaSearch } from 'react-icons/fa';
import { useJobs } from '../hooks/useJobs';

export const Header = () => {

  const { loading, filterJobs } = useJobs();

  return (
    <header className="w-full sm:w-3/4 flex flex-col p-4 gap-5">
      <h2 className="text-2xl mb-3 mt-2">
        <strong>Rapid</strong> Jobs
      </h2>
      <div className="h-[138px] lg-h[130px] bg-hero bg-center bg-cover flex justify-center items-center rounded-md">
        <div className="w-4/5 lg:w-3/4 h-2/5 bg-white p-2 flex items-center rounded">
          <FaSearch />
          <input
            className="w-3/4 bg-transparent focus:outline-none p-2"
            placeholder="Title or companies"
            type="text"
            disabled={ loading }
            onChange={(event) => {
              const value = event.target.value;
              filterJobs(value.toLowerCase())
            }}
          />
          {/* <button disabled={ loading } className="w-2/5 lg:w-1/4  h-full bg-search px-4 py-1 rounded-md text-white font-bold hover:bg-search-hover transition-all duration-300">
            Search
          </button> */}
        </div>
      </div>
    </header>
  );
};
