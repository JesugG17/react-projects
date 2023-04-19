import { TodoActionKind } from '../enums';
import { Todo } from '../interface';

export interface Action {
    type: string;
    payload: Todo; 
}

export const todoReducer = ( state: Todo[], action: Action ): Todo[] => {

    switch(action.type) { 
        case TodoActionKind.ADD:
            return [
                ...state,
                action.payload
            ]
        case TodoActionKind.REMOVE:
            return state.filter( todo => todo.id !== action.payload.id );
        case TodoActionKind.TOGGLE:
            return state.map( todo => {
                if (todo.id === action.payload.id) {
                    return {
                        ...todo,
                        done: !todo.done
                    }
                }
                return todo;
            })
        default:
            return state;
    }
}