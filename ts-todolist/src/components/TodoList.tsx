import { TodoListItem } from './TodoListItem';
import { Todo } from './interface';
import { Action } from './todosReducer';

interface Props {
    todos: Todo[];
    dispatch: React.Dispatch<Action>;
}

export const TodoList = ({ todos, dispatch }: Props) => {
  return (
    <div className='col-7'>
      <ul className='list-group'>
        {
            todos.map((todo) => (
                <TodoListItem 
                    key={ todo.id }
                    todo={ todo }
                    dispatch={ dispatch }
                />
            ))
        }
      </ul>
    </div>
  );
};
