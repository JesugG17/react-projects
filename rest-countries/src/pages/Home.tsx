import { Filter, Countries, Search } from "../components/home"

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
