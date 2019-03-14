import React from 'react';
import styled from 'styled-components';

const Container = styled.footer`
font-size: 0.7rem;
& a {
  text-decoration: none;
}
`;

function Footer() {
  return (
    <Container>
      © {new Date().getFullYear()}, React For Cats.
      <div>Favicon is made by <a href="https://www.freepik.com/" target="_blank">Freepik</a> from <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a> and licensed by <a href="http://creativecommons.org/licenses/by/3.0/" target="_blank">CC BY 3.0.</a></div>
    </Container>
  );
}

export default Footer;
