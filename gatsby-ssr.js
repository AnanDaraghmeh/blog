// to enable redux store in gatsby pages
import React from 'react';
import ReduxStore from './src/redux/store';
export const wrapRootElement = ({ element }) => (
  <ReduxStore>{element}</ReduxStore>
);
