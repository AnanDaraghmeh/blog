import React from 'react';

function Footer() {
  return (
    <footer
      css={`
        font-size: 0.8rem;
      `}
    >
      © {new Date().getFullYear()}, React For Cats.
      <div>Favicon is made by <a href="https://www.freepik.com/" target="_blank">Freepik</a> from <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a> and licensed by <a href="http://creativecommons.org/licenses/by/3.0/" target="_blank">CC BY 3.0.</a></div>
    </footer>
  );
}

export default Footer;
