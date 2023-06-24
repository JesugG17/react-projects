import { useCheckQuestionsState } from "./hooks/useCheckQuestionsState"

export const Footer = () => {

   const { correct, incorrect, unanswered } = useCheckQuestionsState();

  return (
    <footer>
        <strong>{`✅${correct} correctas - ❌${incorrect} incorrectas - ❓ ${ unanswered } sin responder`}</strong>
    </footer>
  )
}
