import { Action } from '../actionCreators/types';
import { AddTodo, RemoveTodo, ToggleTodo, UpdateTodo } from './todos';

export interface Todo {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
}

export type AddTodoAction = Action<typeof AddTodo, Todo>;
export type RemoveTodoAction = Action<typeof RemoveTodo, number>;
export type UpdateTodoAction = Action<
  typeof UpdateTodo,
  { id: number; title: string }
>;
export type ToggleTodoAction = Action<typeof ToggleTodo, number>;

export type Actions =
  | AddTodoAction
  | RemoveTodoAction
  | UpdateTodoAction
  | ToggleTodoAction;
