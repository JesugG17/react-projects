import { FC } from 'react'
import { type Question as QuestionType } from '../types'
import { Card, Typography, List, ListItem, ListItemButton, ListItemText } from '@mui/material'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { monokai } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { useQuestionsStore } from '../store/questions';

export const Question: FC<Props> = ({ info }) => {

  const selectAnswer = useQuestionsStore(state => state.selectAnswer);

  const getBackgroundColor = (index: number): string => {
    const { userSelectetedAnswer, correctAnswer } = info;
    console.log(userSelectetedAnswer);
    if (userSelectetedAnswer == null) return 'transparent';

    if (correctAnswer !== index && userSelectetedAnswer !== index) return 'transparent';

    if (correctAnswer === index) return 'green';

    if (userSelectetedAnswer === index) return 'red';

    return 'transparent';
  }

  return (
    <Card variant='outlined' sx={{ textAlign: 'left', p: 3, bgcolor: '#272822', mt: 3 }}>
      <Typography textAlign='center' variant='h5'>
        {info.question}
      </Typography>
      <SyntaxHighlighter  language='javascript' style={ monokai }>
        {info.code}
      </SyntaxHighlighter>
      <List
        sx={{
          bgcolor: '#333'
        }}
      >
        {
          info.answers.map((answer, index) => (
            <ListItem
              key={index}
              disablePadding
              divider
            >
              <ListItemButton
                disabled={ info.userSelectetedAnswer != null }
                sx={{
                  backgroundColor: getBackgroundColor(index),
                }} 
                onClick={() => selectAnswer(info.id, index)}
              >
                <ListItemText primary={answer} sx={{ textAlign: 'center' }}/>
              </ListItemButton>
            </ListItem>
          ))
        }
      </List>
    </Card>
  )
}

type Props = {
    info: QuestionType
}
