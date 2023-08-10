import { Filter } from "../components/home"
import { Countries } from "../components/home/Countries"
import { Search } from "../components/home/Search"

export const Home = () => {
  return (
    <main className="flex flex-col p-4 gap-10">
      <section className="flex flex-col gap-10 lg:flex-row lg:justify-between">
        <Search />
        <Filter />
      </section>
      <Countries />
    </main>
  )
}
