import { SearchIcon } from "../ui/Icons"

export const Search = () => {
  return (
    <section className="flex px-7 py-4 gap-5 items-center justify-center bg-primary-dark shadow-lg rounded-lg lg:w-2/5">
        <button>
            <SearchIcon />
        </button>
        <input 
            className="bg-transparent flex-1 text-white font-medium text-xs focus:outline-none"
            placeholder="Search for a country.." 
            type="text" 
        />
    </section>
  )
}
