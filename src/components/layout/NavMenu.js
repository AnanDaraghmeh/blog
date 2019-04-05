import React from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

import Search from './Search';

const NavWrapper = styled.div`
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: black;
  font-size: 0.8rem;
  font-weight: bold;
  margin-right: 0.5rem;
`;

const SearchWrapper = styled.div`
  flex-basis: 50%;
  @media only screen and (min-width: 500px) {
    flex-basis: 30%;
  }
`;

const activeLinkStyle = {
  color: 'var(--color-secondary)'
};

const NavMenu = () => (
  <StaticQuery
    query={searchIndexQuery}
    render={data => (
      <NavWrapper>
        <div>
          <NavLink to="/" activeStyle={activeLinkStyle}>
            HOME
          </NavLink>
          <NavLink to="/contact" activeStyle={activeLinkStyle}>
            CONTACT
          </NavLink>
          <NavLink to="/about" activeStyle={activeLinkStyle}>
            ABOUT
          </NavLink>
        </div>
        <SearchWrapper>
          <Search searchIndex={data.siteSearchIndex.index} />
        </SearchWrapper>
      </NavWrapper>
    )}
  />
);

const searchIndexQuery = graphql`
  query {
    siteSearchIndex {
      index
    }
  }
`;

export default NavMenu;
