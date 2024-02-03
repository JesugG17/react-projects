import { createContext } from 'react';
import { Todo } from '../interfaces/todo.interface';
import { Filter } from './TodoProvider';

type ContextSchema = {
  todos: Todo[];
  filter: Filter;
  setFilter: React.Dispatch<React.SetStateAction<Filter>>;
  addTodo: (description: string) => void;
  removeTodo: (todoId: string) => void;
  toggleTodo: (todoId: string) => void;
  editTodo: (todoId: string, newDescription: string) => void;
};

export const TodoContext = createContext<ContextSchema>({} as ContextSchema);
