import { useQuestionStore } from "../store/questions"

export const Footer = () => {

    const { questions, resetGame } = useQuestionStore(state => state);

  return (
    <footer className="footer">
        {
            (questions.length === 0)
            ? <p>Application created by:<br />Jesus Gastelum</p>
            : 
            (
                <>
                    <p>Do you want to reset?</p>
                    <button onClick={ resetGame }>Click here!</button>
                </>
            )
        }
    </footer>
  )
}
