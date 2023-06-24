import { useQuestionsStore } from "../store/questions";

export const useCheckQuestionsState = () => {
    const questions = useQuestionsStore(state => state.questions);

    let correct = 0;
    let incorrect = 0;
    let unanswered = 0;

    questions.forEach( question => {
        const { userSelectetedAnswer, correctAnswer } = question;

        if (userSelectetedAnswer == null) unanswered++;
        else if(userSelectetedAnswer === correctAnswer) correct++;
        else incorrect++;
    });

    return {
        correct,
        incorrect,
        unanswered
    };

}
