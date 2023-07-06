import { FC, useMemo } from 'react';
import { useQuestionStore } from "../store/questions";

export const QuizLayout: FC<Props> = ({ children, containsImg = true }) => {

  const isFlagQuiz = useQuestionStore(state => state.isFlagQuiz);

  const cardHeight = useMemo(() => {
    return isFlagQuiz ? 629 : 515
  }, [isFlagQuiz]);

  return (
    <>
        <h1>COUNTRY QUIZ</h1>
        <section 
          className="card"
          style={{
            height: cardHeight
          }}
        >
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
