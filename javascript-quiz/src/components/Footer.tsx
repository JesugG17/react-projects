import { useCheckQuestionsState } from "../hooks/useCheckQuestionsState";
import { Button, Container } from "@mui/material";
import { useQuestionsStore } from "../store/questions";

export const Footer = () => {
  
  const reset = useQuestionsStore(state => state.reset);
  const { correct, incorrect, unanswered } = useCheckQuestionsState();

  return (
    <footer>
      <strong>{`✅${correct} correctas - ❌${incorrect} incorrectas - ❓ ${unanswered} sin responder`}</strong>
      <Container sx={{ mt: 2 }}>
        <Button onClick={reset}>Resetear juego</Button>
      </Container>
    </footer>
  );
};
