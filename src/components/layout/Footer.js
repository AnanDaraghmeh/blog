import React from 'react';

function Footer() {
  return (
    <footer style={{ fontSize: '0.8rem' }}>
      © {new Date().getFullYear()}, React For Cats.
    </footer>
  );
}

export default Footer;
