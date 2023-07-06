import { useQuestionStore } from "./store/questions"
import { Game, Home, Results } from "./components"

export const QuizApp = () => {

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
