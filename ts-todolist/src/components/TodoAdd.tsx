import { SyntheticEvent, useState } from 'react';
import { Todo } from '../interface';
import { v4 as uuid } from 'uuid';
import { Action } from './todosReducer';
import { TodoActionKind } from '../enums';

interface Props {
    dispatch: React.Dispatch<Action>
}

export const TodoAdd = ({ dispatch }: Props) => {

    const [formState, setFormState] = useState<string>('');

    const handleChange = (event: SyntheticEvent) => {
        const target = event.target as HTMLInputElement;
        setFormState(target.value);
    }
  
    const handleSubmit = ( event: SyntheticEvent ) => {
      event.preventDefault();
  
      if (formState.length <= 1) return;
  
      const todo: Todo = {
        id: uuid(),
        descripion: formState,
        done: false
      }
  
      const action: Action = {
        type: TodoActionKind.ADD,
        payload: todo
      }

      dispatch(action);
      setFormState('');
    }

  return (
    <div className='col-5'>
    <form onSubmit={ handleSubmit }>
      <input 
        className='form-control border-1'
        placeholder="¿Que hay que hacer?"
        onChange={ handleChange }
        value={ formState }
      />
      <button
        type='submit'
        className='btn btn-outline-primary mt-2'
      >
        Submit
      </button>
    </form>
  </div>
  )
}
