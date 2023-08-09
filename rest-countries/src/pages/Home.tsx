import { Filter } from "../components/home"
import { Search } from "../components/home/Search"

export const Home = () => {
  return (
    <main className="flex flex-col p-4 gap-5">
      <Search />
      <Filter />
    </main>
  )
}
