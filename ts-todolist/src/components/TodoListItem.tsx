import { TodoActionKind } from '../enums';
import { Todo } from '../interface';
import { Action } from './todosReducer';

interface Props {
    todo: Todo;
    dispatch: React.Dispatch<Action>;
}

export const TodoListItem = ({ todo, dispatch }: Props) => {

  const handleToggle = () => {
    const action: Action = {
      type: TodoActionKind.TOGGLE,
      payload: todo
    }
    dispatch(action);
  }

  const handleDelete = () => {
    const action: Action = {
      type: TodoActionKind.REMOVE,
      payload: todo
    }
    dispatch(action);
  }

  return (
    <div
      key={todo.id}
      className='d-flex justify-content-between list-group-item mb-2 pointer'
    >
      <li
        onClick={ handleToggle }
        className={`${todo.done ? 'text-decoration-line-through' : ''}`}
      >
        {todo.descripion}
      </li>
      <button className='btn btn-danger' onClick={ handleDelete }>
        Eliminar
      </button>
    </div>
  );
};
