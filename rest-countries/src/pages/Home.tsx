import { Filter } from "../components/home"
import { Countries } from "../components/home/Countries"
import { Search } from "../components/home/Search"

export const Home = () => {
  return (
    <main className="flex flex-col p-4 gap-10">
      <Search />
      <Filter />
      <Countries />
    </main>
  )
}
