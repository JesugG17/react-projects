import { Button } from "@mui/material";
import { useQuestionsStore } from "../store/questions";

const LIMIT_QUESTIONS = 5;

export const StartQuiz = () => {
  const fetchQuestions = useQuestionsStore((state) => state.fetchQuestions);
  return (
    <Button onClick={() => fetchQuestions(LIMIT_QUESTIONS)} variant="contained" sx={{ mt: 3 }}>
      ¡Empezar!
    </Button>
  );
};
