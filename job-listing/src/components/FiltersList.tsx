import { useFilter } from '../hooks/useFilter';
import { FiltersListItem } from './FiltersListItem';

export const FiltersList = () => {
  const { filters, clearFilters } = useFilter();
  return (
    <section className="bg-white flex justify-between items-center p-4 -top-8 relative w-4/5 max-w-3xl">
      <ul className="flex flex-wrap gap-3">
        {filters.map((filter) => (
          <FiltersListItem filter={filter} key={filter} />
        ))}
      </ul>
      <button onClick={clearFilters} className="text-dark-grayish-cyan border-b-2 border-transparent hover:border-gray-300 p-0 hover:text-primary">
        Clear
      </button>
    </section>
  );
};
