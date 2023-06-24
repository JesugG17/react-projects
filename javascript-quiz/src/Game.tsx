import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { Question } from "./Question";
import { useQuestionsStore } from "./store/questions";
import { Container, Typography, IconButton } from "@mui/material";
import { Footer } from "./Footer";

export const Game = () => {
  const { questions, currentQuestion, goPrevQuestion, goNextQuestion } = useQuestionsStore((state) => state);
// :a
  const questionInfo = questions[currentQuestion];

  return (
    <>
      <Question info={questionInfo} />
      <Container sx={{ mt: 2, display: 'flex', gap: 3, justifyContent: 'center'}}>
        <IconButton onClick={goPrevQuestion} disabled={ currentQuestion === 0}>
          <ArrowBackIos />
        </IconButton>
        <Typography variant="h5">{currentQuestion + 1} / { questions.length }</Typography>
        <IconButton onClick={goNextQuestion} disabled={ currentQuestion === questions.length - 1}>
          <ArrowForwardIos />
        </IconButton>
      </Container>
      <Footer />
    </>
  );
};
