/* @flow */

import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import App from './containers/app';
import Header from './components/header/header';

const elm = document.getElementById('app');

if (elm) {
  const store = createStore(reducer);
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    elm
  );
}
