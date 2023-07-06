import { useMemo } from "react";
import { useQuestionStore } from "../store/questions";

const LETTERS_OF_QUESTIONS = ["A", "B", "C", "D"];

export const Game = () => {
  const { questions, currentQuestion, goNextQuestion, checkAnswer } = useQuestionStore();

  const isQuestionAnswered = useMemo(() => {
    return questions[currentQuestion].userSelectedAnswer != null
  }, [questions[currentQuestion].userSelectedAnswer]);

  const getBackground = (index: number) => {
    const {correctAnswer, userSelectedAnswer} = questions[currentQuestion]

    if (userSelectedAnswer ==null) return '';

    if (userSelectedAnswer === correctAnswer && index === correctAnswer) return 'green';

    if (index === correctAnswer) return 'green';
    
    if (userSelectedAnswer !== correctAnswer && index === userSelectedAnswer) return 'red';

    return '';
  }


  return (
    <>
      <h4>{questions[currentQuestion].question}</h4>
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
      
    </>
  );
};
