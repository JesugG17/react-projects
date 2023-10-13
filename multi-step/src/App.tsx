import { Header } from "./components/Header"
import { Footer } from './components/Footer';
import { Steps } from "./components/Steps";

export const App = () => {
  return (
    <section className="min-h-screen bg-background">
      <Header />
      <Steps />
      <Footer />
    </section>
  )
}
