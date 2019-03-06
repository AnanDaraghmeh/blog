import React from 'react';

import Footer from './Footer';
import styles from './Layout.module.css';

class Layout extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <main>{this.props.children}</main>
        <Footer />
      </div>
    );
  }
}

export default Layout;
