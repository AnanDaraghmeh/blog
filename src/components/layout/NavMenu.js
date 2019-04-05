import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const NavWrapper = styled.div`
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: black;
  font-size: 0.8rem;
  font-weight: bold;
  margin-right: 0.5rem;
`;

const activeLinkStyle = {
  color: 'var(--color-secondary)'
};

function NavMenu() {
  return (
    <NavWrapper>
      <NavLink to="/" activeStyle={activeLinkStyle}>
        HOME
      </NavLink>
      <NavLink to="/contact" activeStyle={activeLinkStyle}>
        CONTACT
      </NavLink>
      <NavLink to="/about" activeStyle={activeLinkStyle}>
        ABOUT
      </NavLink>
    </NavWrapper>
  );
}

export default NavMenu;
