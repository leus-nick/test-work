import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { useAppSelector } from '../hooks';
import { fetchTodo } from '../redux/actionCreators/todos';
import TodoItem from './Todo';

const List = styled.ul`
  list-style-type: none;
  margin: 0;
  display: flex;
  flex-direction: column;
`;

const TodoList: React.FC = () => {
  const dispatch = useDispatch();
  const todos = useAppSelector((state) => state.todos);

  useEffect(() => {
    if (!todos.length) {
      dispatch(fetchTodo());
    }
  }, [dispatch]);

  return (
    <div className='todo-list'>
      {!todos ? (
        <h1>All completed</h1>
      ) : (
        <List>
          {todos.map((todo) => {
            return <TodoItem key={todo.id} todo={todo} />;
          })}
        </List>
      )}
    </div>
  );
};

export default TodoList;
