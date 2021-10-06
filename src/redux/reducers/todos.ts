import { AddTodo, RemoveTodo, ToggleTodo, UpdateTodo } from '../actions/todos';
import { Actions } from '../actions/types';
import { Todo } from './../actions/types';

export const todosReducer = (
  state: Array<Todo> = [],
  action: Actions
): Array<Todo> => {
  switch (action.type) {
    case AddTodo:
      return [...state, action.payload!];
    case RemoveTodo:
      return state.filter((todo) => {
        return todo.id !== action.payload;
      });
    case ToggleTodo:
      return state.map((todo) => {
        if (todo.id !== action.payload!) {
          return todo;
        }
        return { ...todo, completed: !todo.completed };
      });
    case UpdateTodo:
      return state.map((todo) => {
        if (todo.id !== action.payload!.id) {
          return todo;
        }
        return { ...todo, title: action.payload!.title };
      });
    default:
      return state;
  }
};
