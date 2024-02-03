import { Container } from 'semantic-ui-react';
import { TodoAdd, TodoList, Filter } from './components';

export const App = () => {
  return (
    <Container style={ContainerStyles}>
      <TodoAdd />
      <Filter />
      <TodoList />
    </Container>
  );
};

const ContainerStyles = {
  display: 'flex',
  height: '100vh',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
};
