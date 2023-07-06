import { useState, ChangeEvent } from "react"
import { Game } from "./components"
import { Home } from "./components/Home"
import { QuizLayout } from "./layout/QuizLayout"
import { useQuestionStore } from "./store/questions"
import { Counter } from "./components/Counter"

export const CountryApp = () => {

  const { questions } = useQuestionStore();

  const [input, setInput] = useState('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    setInput(event.target.value);
  } 


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
