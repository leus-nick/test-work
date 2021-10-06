import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { EditText } from 'react-edit-text';
import Checkbox from './Checkbox';
import { Todo } from './../redux/actions/types';
import {
  createRemoveTodoAction,
  createToggleTodoAction,
  createUpdateTodoAction,
} from '../redux/actionCreators/todos';

const StyledTodo = styled.div`
  min-width: 600px;
  display: flex;
  margin-bottom: 20px;
`;

const Title = styled(EditText)`
  flex: 1;
  text-transform: capitalize;
  margin-left: 10px;
`;

const StyledButton = styled.button`
  background-color: transparent;
  border: 1px solid #5c7aea;
  color: #5c7aea;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.5s ease-in-out;

  &:hover {
    background-color: #5c7aea;
    color: #fff;
  }
`;

const TodoItem: React.FC<{ todo: Todo }> = ({ todo }) => {
  const dispatch = useDispatch();

  const handleCheckBox = (id: number) => {
    dispatch(createToggleTodoAction(id));
  };

  const handleRemoveTodo = (id: number) => {
    dispatch(createRemoveTodoAction(id));
  };
  // @ts-ignore
  const handleEditText = ({ value }) => {
    dispatch(createUpdateTodoAction(todo.id, value));
  };

  return (
    <StyledTodo className='todo'>
      <label>
        <Checkbox
          checked={todo.completed}
          onChange={() => handleCheckBox(todo.id)}
        />
      </label>
      <Title defaultValue={todo!.title} onSave={handleEditText} />
      <StyledButton onClick={() => handleRemoveTodo(todo.id)}>
        Delete todo
      </StyledButton>
    </StyledTodo>
  );
};

export default TodoItem;
