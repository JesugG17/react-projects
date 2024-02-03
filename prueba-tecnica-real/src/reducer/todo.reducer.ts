import { Todo } from '../interfaces/todo.interface';

export enum TodoActionKind {
  ADD = 'ADD',
  REMOVE = 'REMOVE',
  TOGGLE = 'TOGGLE',
  EDIT = 'EDIT',
}

export interface Action {
  type: TodoActionKind;
  payload: Todo;
}

export const todoReducer = (state: Todo[], action: Action) => {
  const { type, payload } = action;

  switch (type) {
    case TodoActionKind.ADD:
      return [payload, ...state];
    case TodoActionKind.REMOVE:
      return state.filter((todo) => todo.id !== payload.id);
    case TodoActionKind.EDIT:
      return state.map((todo) => {
        if (todo.id === payload.id) {
          return {
            ...todo,
            description: payload.description,
          };
        }
        return todo;
      });
    case TodoActionKind.TOGGLE:
      return state.map((todo) => {
        if (todo.id === payload.id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      });
    default:
      return state;
  }
};
