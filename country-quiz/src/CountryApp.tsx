import { Game } from "./components"
import { Home } from "./components/Home"
import { useQuestionStore } from "./store/questions"
import { Results } from "./components/Results"

export const CountryApp = () => {

  const { questions, isGameOver } = useQuestionStore();

  return (
    <main className="container">
        
      {
        (questions.length === 0)
        ? <Home />
        : !isGameOver && <Game />
      }
      {
        isGameOver && <Results />
      }
                
    </main>
  )
}
