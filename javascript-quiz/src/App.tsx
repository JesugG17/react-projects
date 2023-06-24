import { Container, Stack, Typography } from "@mui/material";
import "./App.css";
import { StartQuiz, JavaScriptLogo, Game } from "./components";
import { useQuestionsStore } from "./store/questions";

function App() {

  const questions = useQuestionsStore(state => state.questions);
  return (
    <main>
      <Container maxWidth="sm">
        <Stack
          direction="row"
          gap={2}
          alignItems="center"
          justifyContent="center"
        >
          <JavaScriptLogo />
          <Typography variant="h2" component='h1'>JavaScript Quiz</Typography>
        </Stack>
        { questions.length === 0 && <StartQuiz />}
        { questions.length > 0 && <Game />}


      </Container>
    </main>
  );
}

export default App;
