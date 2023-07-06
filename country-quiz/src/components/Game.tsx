import { useMemo } from "react";
import { useQuestionStore } from "../store/questions";
import { QuizLayout } from "../layout/QuizLayout";

const LETTERS_OF_QUESTIONS = ["A", "B", "C", "D"];

export const Game = () => {

  const { questions, 
          currentQuestion, 
          goNextQuestion, 
          checkAnswer,
          isFlagQuiz } = useQuestionStore();


  const question = questions[currentQuestion];

  const isQuestionAnswered = useMemo(() => {
    return questions[currentQuestion].userSelectedAnswer != null
  }, [questions[currentQuestion].userSelectedAnswer]);

  const getBackground = (index: number) => {
    const {correctAnswer, userSelectedAnswer} = question;

    if (userSelectedAnswer ==null) return '';

    if (userSelectedAnswer === correctAnswer && index === correctAnswer) return '#09d709';

    if (index === correctAnswer) return '#09d709';
    
    if (userSelectedAnswer !== correctAnswer && index === userSelectedAnswer) return '#f72b2b';

    return '';
  }

  return (
    <QuizLayout>
      {
        isFlagQuiz &&
        (
          <img
            className="flag" 
            src={question.flag} 
            alt='country flag' />
        )
      }
      <h4>{question.question}</h4>
      <ul className="questions__container">
        {
          questions[currentQuestion].answers.map( (answer, index) => (
          <button
            style={{ background: getBackground(index)}}
            key={index} 
            className="question" 
            onClick={() => checkAnswer(index) }
            disabled={ isQuestionAnswered }
            
          >
            <p>{LETTERS_OF_QUESTIONS[index]}</p>
            <li>{answer}</li>
          </button>
          ))
        }
      </ul>
     
      <div className="button__container">
        <button 
          disabled={!isQuestionAnswered}
          onClick={goNextQuestion}
          className="next__button"
        >
            Next
        </button>
      </div>  
      
    </QuizLayout>
  );
};
