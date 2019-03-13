import React from 'react';
import { Link } from 'gatsby';

function Header() {
  return (
    <div>
      <h3>
        <Link
          css={`
            box-shadow: none;
            text-decoration: none;
            color: black;
            font-size: 0.8rem;
          `}
          to={`/`}
        >
          HOME
        </Link>
      </h3>
    </div>
  );
}

export default Header;
