import { Header } from "./components/Header";
import { JobsContainer } from "./components/JobsContainer";

export const JobsApp = () => {

  return (
    <main className="flex flex-col items-center bg-background gap-1">
        <Header />
        <JobsContainer />
    </main>
  )
}
