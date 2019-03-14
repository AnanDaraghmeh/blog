import React from 'react';
import Header from './Header';

import BIO from '../bio';

function NavMenu() {
  return (
    <div>
      <Header />
      <BIO 
      customName="Hi! I'm Anan, a web developer."
      text="I write about web development in general particularly things related to react." />
    </div>
  );
}

export default NavMenu;
