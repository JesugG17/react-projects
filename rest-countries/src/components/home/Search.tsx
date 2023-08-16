import { SearchIcon } from "../ui/Icons";
import { useSearch, useTheme } from "../../hooks";

export const Search = () => {
  const { handleChange, handleSubmit } = useSearch();
  const { isDarkTheme } = useTheme();

  return (
    <section
      className={`px-7 py-4 dark shadow-lg rounded-lg lg:w-2/5 ${
        isDarkTheme && "bg-primary-dark"
      }`}
    >
      <form
        onSubmit={handleSubmit}
        className="flex gap-5 items-center"
      >
        <button>
          <SearchIcon />
        </button>
        <input
          className={`bg-transparent flex-1 font-medium text-xs focus:outline-none md:text-base ${isDarkTheme && 'text-white'}`}
          placeholder="Search for a country that contains.."
          type="text"
          onChange={handleChange}
        />
      </form>
    </section>
  );
};
