import { Game } from "./components"
import { Home } from "./components/Home"
import { QuizLayout } from "./layout/QuizLayout"
import { useQuestionStore } from "./store/questions"

export const CountryApp = () => {

  const { questions } = useQuestionStore();

  return (
    <main className="container">
        <QuizLayout>
          {
            (questions.length === 0)
            ? <Home />
            : <Game />
          }
        </QuizLayout>        
    </main>
  )
}
