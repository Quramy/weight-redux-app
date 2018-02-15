/* @flow */
/* eslint-disable import/first */

import './rx-imports';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import {
  ConnectedRouter,
  routerReducer,
  routerMiddleware,
} from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import { createEpicMiddleware } from 'redux-observable';
import reducers from './reducers';
import AppRoute from './route';
import weightEpic from './epics/weight-epic';

const history = createHistory();

// eslint-disable-next-line no-undef
const elm = document.getElementById('app');

if (elm) {
  const store = createStore(
    combineReducers({
      ...reducers,
      router: routerReducer,
    }),
    applyMiddleware(routerMiddleware(history), createEpicMiddleware(weightEpic)),
  );
  ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <AppRoute />
      </ConnectedRouter>
    </Provider>,
    elm
  );
}
