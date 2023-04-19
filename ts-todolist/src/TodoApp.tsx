import { useEffect, useReducer } from 'react';
import { Todo } from './interface';
import { TodoAdd, TodoList, todoReducer } from './components';

const INITIAL_STATE: Todo[] = [];

export const TodoApp = () => {

  const [todos, dispatch] = useReducer(todoReducer, INITIAL_STATE, () => {
    // @ts-ignore
    const todos: Todo[] = JSON.parse(localStorage.getItem('todos'));

    return todos ?? INITIAL_STATE;
  });

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const total = todos.length;
  const pending = todos.filter( todo => !todo.done).length;
  const completed = todos.filter( todo => todo.done).length;                                

  return (
    <>
      <h1>TodosApp</h1>
      <h3>Total: { total } Pending: { pending } Completed: { completed } </h3>
      <hr />

      <div className='row'>

          <TodoList 
            todos={ todos }
            dispatch={ dispatch }
          />

          <TodoAdd 
            dispatch={ dispatch }
          />
          
      </div>
    </>
  )
}
