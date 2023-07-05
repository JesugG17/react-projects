import { useQuestionStore } from "../store/questions";

const LETTERS_OF_QUESTIONS = ["A", "B", "C", "D"];

export const Game = () => {
  const { questions, currentQuestion } = useQuestionStore();

  return (
    <>
      <h4>{questions[currentQuestion].question}</h4>
      <ul className="questions__container">
        {
          questions[currentQuestion].answers.map( (answer, index) => (
          <div className="question" key={index}>
            <p>{LETTERS_OF_QUESTIONS[index]}</p>
            <li>{answer}</li>
          </div>
          ))
        }
      </ul>
      <div className="button__container">
        <button className="next__button">Next</button>
      </div>
    </>
  );
};
