import { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';

export const useTodos = () => {
  const context = useContext(TodoContext);

  if (!context) {
    throw new Error('You must envolve your app into a TodoProvider');
  }

  return context;
};
