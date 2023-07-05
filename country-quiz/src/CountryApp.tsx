import { Game } from "./components"
import { Home } from "./components/Home"
import { QuizLayout } from "./layout/QuizLayout"

export const CountryApp = () => {
  return (
    <main className="container">
        <QuizLayout>
          <Home />        
          {/* <Game /> */}
        </QuizLayout>        
    </main>
  )
}
