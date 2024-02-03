import { List, Header } from 'semantic-ui-react';
import { TodoListItem } from './TodoListItem';
import { useTodos } from '../hooks/useTodos';
export const TodoList = () => {
  const { todos } = useTodos();

  return (
    <List style={ListStyles}>
      {todos.length === 0 && (
        <Header
          style={NoTodosToShowHeaderStyles}
          as="h4"
        >
          No hay tareas por mostrar
        </Header>
      )}
      {todos.map((todo) => (
        <TodoListItem
          key={todo.id}
          todo={todo}
        />
      ))}
    </List>
  );
};

const NoTodosToShowHeaderStyles = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
  fontSize: 32,
};

const ListStyles = {
  width: '80%',
  height: '500px',
  maxHeight: '500px',
  backgroundColor: '#eeeeeb',
  overflowY: 'scroll',
  padding: 5,
};
