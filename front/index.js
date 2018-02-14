/* @flow */

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Route } from 'react-router';
import {
  ConnectedRouter,
  routerReducer,
  routerMiddleware,
  push,
} from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import reducers from './reducers';
import AppRoute from './route';

const history = createHistory();
const middleware = routerMiddleware(history);
const elm = document.getElementById('app');

if (elm) {
  const store = createStore(
    combineReducers({
      ...reducers,
      router: routerReducer,
    }),
    applyMiddleware(middleware),
  );
  console.log(store);
  ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <AppRoute />
      </ConnectedRouter>
    </Provider>,
    elm
  );
}
