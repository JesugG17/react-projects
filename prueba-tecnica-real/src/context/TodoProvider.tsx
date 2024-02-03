import { PropsWithChildren, FC, useReducer, useEffect, useState } from 'react';
import { TodoContext } from './TodoContext';
import { todoReducer, TodoActionKind } from '../reducer/todo.reducer';
import { Todo } from '../interfaces/todo.interface';

export enum Filter {
  ALL = 'Todos',
  PENDING = 'Pendiente',
  COMPLETED = 'Completado',
}

export const TodoProvider: FC<Props> = ({ children }) => {
  const [todos, dispatch] = useReducer(todoReducer, [], () => {
    const storage = JSON.parse(localStorage.getItem('state') || '[]');
    return storage;
  });

  const [filter, setFilter] = useState<Filter>(() => {
    const storage = JSON.parse(localStorage.getItem('filter') as string);

    return storage ?? Filter.ALL;
  });

  const addTodo = (description: string) => {
    const newTodo = {
      id: crypto.randomUUID(),
      description,
      completed: false,
    };

    dispatch({
      type: TodoActionKind.ADD,
      payload: newTodo,
    });
  };

  const removeTodo = (todoId: string) => {
    const todo = todos.find((todo) => todo.id === todoId);
    dispatch({
      type: TodoActionKind.REMOVE,
      payload: todo!,
    });
  };

  const toggleTodo = (todoId: string) => {
    const todo = todos.find((todo) => todo.id === todoId);
    dispatch({
      type: TodoActionKind.TOGGLE,
      payload: todo!,
    });
  };

  const editTodo = (todoId: string, newDescription: string) => {
    const todo = todos.find((todo) => todo.id === todoId);
    dispatch({
      type: TodoActionKind.EDIT,
      payload: { ...todo!, description: newDescription },
    });
  };

  const filterTodos = (): Todo[] => {
    if (filter === Filter.ALL) {
      return todos;
    }

    if (filter === Filter.PENDING) {
      return todos.filter((todo) => !todo.completed);
    }

    return todos.filter((todo) => todo.completed);
  };

  const filteredTodos = filterTodos();

  useEffect(() => {
    localStorage.setItem('state', JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    localStorage.setItem('filter', JSON.stringify(filter));
  }, [filter]);

  return (
    <TodoContext.Provider
      value={{
        todos: filteredTodos,
        filter,
        addTodo,
        removeTodo,
        toggleTodo,
        editTodo,
        setFilter,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

type Props = PropsWithChildren;
