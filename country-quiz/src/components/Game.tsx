
const LETTERS_OF_QUESTIONS = ['A', 'B', 'C', 'D'];

export const Game = () => {
  return (
    <>
      <h4>This is the question</h4>
      <ul className="questions__container">
        {["resp1", "resp2", "resp2", "resp4"].map((resp, index) => {
          return(
            <div
                className="question" 
                key={resp}
            >
                <p>{LETTERS_OF_QUESTIONS[index]}</p>
                <li>
                    {resp}
                </li>
            </div>
          ) 
        })}
      </ul>
      <div className="button__container">
        <button className="next__button">
            Next
        </button>
      </div>
    </>
  );
};
