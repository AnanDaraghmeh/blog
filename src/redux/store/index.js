import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from '../reducers';

const store = createStore(reducers);

const ReduxStore = props => {
  return <Provider store={store}>{props.children}</Provider>;
};

export default ReduxStore;
