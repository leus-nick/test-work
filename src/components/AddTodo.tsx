import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { useAppSelector } from '../hooks';
import { createAddTodoAction } from '../redux/actionCreators/todos';

const StyledDiv = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledInput = styled.input`
  padding: 5px 10px;
  min-width: 200px;
  border: 1px solid #5c7aea;
  margin: 0 10px;

  &:focus-visible {
    outline: none;
  }
`;

const StyledButton = styled.button`
  padding: 5px 10px;
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
const AddTodo: React.FC = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const todos = useAppSelector((state) => state.todos);

  const findNextId = () => {
    return todos[todos.length - 1].id + 1;
  };

  const handleAddTodo = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();

    if (!title) {
      return;
    }

    const todo = {
      id: findNextId(),
      userId: 1,
      completed: false,
      title: title,
    };

    dispatch(createAddTodoAction(todo));
    setTitle('');
  };

  return (
    <StyledDiv className='add-todo'>
      <StyledInput
        type='text'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <StyledButton onClick={(e) => handleAddTodo(e)}>add todo</StyledButton>
    </StyledDiv>
  );
};

export default AddTodo;
