import { AddTodo, RemoveTodo, ToggleTodo, UpdateTodo } from '../actions/todos';
import {
  AddTodoAction,
  RemoveTodoAction,
  UpdateTodoAction,
  Todo,
  ToggleTodoAction,
} from '../actions/types';
import { createAction } from './types';
import { AppThunk } from '../store';

export const createAddTodoAction = (todo: Todo): AddTodoAction => {
  return createAction(AddTodo, todo);
};

export const createRemoveTodoAction = (id: number): RemoveTodoAction => {
  return createAction(RemoveTodo, id);
};

export const createUpdateTodoAction = (
  id: number,
  title: string
): UpdateTodoAction => {
  return createAction(UpdateTodo, { id, title });
};

export const createToggleTodoAction = (id: number): ToggleTodoAction => {
  return createAction(ToggleTodo, id);
};

export const fetchTodo = (): AppThunk => async (dispatch) => {
  const data = await fetch(
    'https://jsonplaceholder.typicode.com/todos?_limit=10'
  ).then((response) => response.json());

  data.forEach((todo: Todo) => {
    dispatch(createAddTodoAction(todo));
  });
};
