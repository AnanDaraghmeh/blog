import React from 'react';
import styled from 'styled-components';

import Footer from './Footer';

const Container = styled.div`
margin-right: auto;
margin-left: auto;
padding: 1.3rem;
@media (min-width: 480px) {
    padding: 1.7rem;
}

@media (min-width: 768px) {
    padding: 2.3rem;
}
@media (min-width: 992px) {
    padding: 4rem;
}

@media (min-width: 1200px) {
    padding: 6rem;
  }
}`;

class Layout extends React.Component {
  render() {
    return (
      <Container>
        <main>{this.props.children}</main>
        <Footer />
      </Container>
    );
  }
}

export default Layout;
