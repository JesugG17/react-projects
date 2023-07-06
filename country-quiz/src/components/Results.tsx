import { QuizLayout } from "../layout/QuizLayout"

export const Results = () => {
  return (
    <QuizLayout containsImg={ false }>
        <section className="winner">
            <img src="/winner.svg" alt="" />
        </section>
    </QuizLayout>
  )
}
