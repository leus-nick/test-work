import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledMenu = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const List = styled.ul`
  min-width: 400px;
  list-style-type: none;
  margin: 0;
  padding: 50px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MenuItem = styled(Link)`
  text-decoration: none;
  font-weight: bold;
  font-size: 24px;
  color: #5c7aea;
`;

const Menu: React.FC = () => {
  return (
    <StyledMenu className='menu'>
      <List>
        <li>
          <MenuItem to='/'>create todo form</MenuItem>
        </li>
        <li>
          <MenuItem to='/todos'>todos</MenuItem>
        </li>
      </List>
    </StyledMenu>
  );
};

export default Menu;
