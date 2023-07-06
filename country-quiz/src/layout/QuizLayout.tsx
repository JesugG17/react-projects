import { FC } from "react"

export const QuizLayout: FC<Props> = ({ children, containsImg = true }) => {
  return (
    <>
        <h1>COUNTRY QUIZ</h1>
        <section className="card">
            {
              containsImg &&
              (
                <figure>
                    <img src="./adventure.svg" alt="" />
                </figure>
              )
            }
            {children}
        </section>
    </>
  )
}

type Props = {
  children: React.ReactNode;
  containsImg?: boolean;
};
