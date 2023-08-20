import { SearchIcon } from '@/ui/shared/Icons';
import { Tweet } from '..';

export const Search = () => {
  return (
    <section className="w-full flex flex-col items-center gap-4 lg:w-3/5">
      <header className="w-11/12 bg-white p-2 rounded-lg shadow-md flex justify-between md:w-4/5 lg:w-full">
        <div className="flex gap-3">
          <SearchIcon />
          <input
            className="bg-transparent focus:outline-none text-xs"
            type="text"
            placeholder="Search"
          />
        </div>
        <button className="ml-2 text-xs text-white bg-blue-600 px-3 py-1 rounded md:py-2">
          Search
        </button>
      </header>
      <Tweet />
    </section>
  );
};
