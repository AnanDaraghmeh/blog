import React from 'react';
import Header from './Header';

import BIO from '../Bio';

function NavMenu() {
  return (
    <div>
      <Header />
      <BIO text="Hey! I'm a web developer. I write about web development in general but mainly things related to react js."/>
    </div>
  );
}

export default NavMenu;
