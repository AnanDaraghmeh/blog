// redux store
import React from 'react';
import ReduxStore from './src/redux/store';
export const wrapRootElement = ({ element }) => (
  <ReduxStore>{element}</ReduxStore>
);
