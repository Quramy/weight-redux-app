/* @flow */

import type { MiddlewareAPI } from 'redux';
import { Observable } from 'rxjs/Observable';
import { push } from 'react-router-redux';
import { combineEpics } from 'redux-observable';
import type { State } from '../reducers';
import type { Actions } from '../actions/weight-input-actions';

// TODO 
// replace calling API
// eslint-disable-next-line no-unused-vars
function submitWeight(weight: number) {
  return new Promise((res) => {
    setTimeout(() => res(), 1000);
  });
}

const submitEpic = (action$: Observable<Actions>, store: MiddlewareAPI<State, Actions>) =>
  action$
    .filter(a => a.type === 'SUBMIT_WEIGHT')
    .switchMap(() => submitWeight(store.getState().weightInput.weight))
    .map(() => ({ type: 'RESPONSE_SUBMIT_WEIGHT' }))
    // .do(x => console.log(x))
  ;

const submitDoneEpic = (action$: Observable<Actions>) => 
  action$
    .filter(a => a.type === 'RESPONSE_SUBMIT_WEIGHT')
    .map(() => push('/'))
  ;

export default combineEpics(submitEpic, submitDoneEpic);
