import { FC, PropsWithChildren } from "react"

export const QuizLayout: FC<Props> = ({ children }) => {
  return (
    <>
        <h1>COUNTRY QUIZ</h1>
        <section className="card">
            <figure>
                <img src="./adventure.svg" alt="" />
            </figure>
            {children}
        </section>
    </>
  )
}

type Props = PropsWithChildren;
