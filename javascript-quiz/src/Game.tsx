import { Question } from "./Question";
import { useQuestionsStore } from "./store/questions";

export const Game = () => {

    const questions = useQuestionsStore(state => state.questions);
    const currentQuestion = useQuestionsStore(state => state.currentQuestion);

    const questionInfo = questions[currentQuestion];

  return (
    <>
        <Question info={ questionInfo }/>
    </>
  )
}
