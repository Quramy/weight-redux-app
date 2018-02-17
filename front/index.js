/* @flow */
/* eslint-disable import/first */

import './rx-imports';
import './firebase/init';
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
import checkAuth from './firebase/auth/check-auth';

const history = createHistory();

checkAuth().then(user => {
  // eslint-disable-next-line no-undef
  const elm = document.getElementById('app');

  if (elm) {
    const store = createStore(
      combineReducers({
        ...reducers,
        router: routerReducer,
      }),
      ({
        account: {
          me: user,
        },
      }: any), // FIXME
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
}).catch(() => {
  // eslint-disable-next-line no-undef
  // location.href = '/login';
});
