import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import AddTodo from './components/AddTodo';
import Menu from './components/Menu';
import TodoList from './components/TodoList';

const Main = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const App = () => {
  return (
    <Router>
      <Menu />
      <Main>
        <Switch>
          <Route exact path='/'>
            <AddTodo />
          </Route>
        </Switch>
        <Switch>
          <Route path='/todos'>
            <TodoList />
          </Route>
        </Switch>
      </Main>
    </Router>
  );
};

export default App;
