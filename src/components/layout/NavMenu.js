import React from 'react';
import { Link } from 'gatsby';

function NavMenu() {
  return (
    <div
      css={`
        margin-bottom: 1rem;
      `}
    >
      <Link
        css={`
          text-decoration: none;
          color: black;
          font-size: 0.8rem;
          font-weight: bold;
        `}
        to={`/`}
      >
        HOME
      </Link>
    </div>
  );
}

export default NavMenu;
