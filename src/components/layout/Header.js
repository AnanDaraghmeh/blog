import React from 'react';
import { Link } from 'gatsby';

function Header() {
  return (
    <div>
      <h3>
        <Link
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: 'black',
            fontSize: '0.8rem'
          }}
          to={`/`}
        >
          HOME
        </Link>
      </h3>
    </div>
  );
}

export default Header;
