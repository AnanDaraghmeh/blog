import React from 'react';
import styled from 'styled-components';

import NavMenu from './NavMenu';
import Footer from './Footer';

const Container = styled.div`
margin-right: auto;
margin-left: auto;
padding: 1.2rem;
@media only screen and (min-width: 480px) {
    padding: 1.7rem;
}

@media only screen and (min-width: 768px) {
    padding: 2rem 2.3rem;
}
@media only screen and (min-width: 992px) {
    padding: 2.5rem 4rem;
}

@media only screen and (min-width: 1200px) {
    padding: 3rem 6rem;
  }
}`;

class Layout extends React.Component {
  render() {
    return (
      <Container>
        <NavMenu />
        <main>{this.props.children}</main>
        <Footer />
      </Container>
    );
  }
}

export default Layout;
