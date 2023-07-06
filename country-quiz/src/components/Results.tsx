import { QuizLayout } from "../layout/QuizLayout"
import { useQuestionStore } from "../store/questions"

export const Results = () => {

    const { resetGame, questions } = useQuestionStore();

    const correctAnswers = questions.filter( question => question.isCorrectAnswer).length;

  return (
    <QuizLayout containsImg={ false }>
        <section className="winner">
            <img src="/winner.svg" alt="" />
            <div>
                <h4>Results</h4>
                <p>you got <strong>{ correctAnswers }</strong> correct answers</p>
            </div>
            <button onClick={resetGame}>Try again</button>
        </section>
    </QuizLayout>
  )
}
