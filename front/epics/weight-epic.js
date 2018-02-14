/* @flow */

import type { MiddlewareAPI } from 'redux';
import type { State } from '../reducers';
import type { Actions } from '../actions/weight-input-actions';
import { Observable } from 'rxjs/Observable';
import { push } from 'react-router-redux';
import { combineEpics } from 'redux-observable';

// TODO 
// replace calling API
function submitWeight(weight: number) {
  console.log('submitting', weight);
  return new Promise((res, rej) => {
    setTimeout(() => res(), 1000);
  });
}

const submitEpic = (action$: Observable<Actions>, store: MiddlewareAPI<State, Actions>) => {
  return action$
    .filter(a => a.type === 'SUBMIT_WEIGHT')
    .switchMap(() => submitWeight(store.getState().weightInput.weight))
    .map(() => ({ type: 'RESPONSE_SUBMIT_WEIGHT' }))
    .do(x => console.log(x))
  ;
};

const submitDoneEpic = (action$: Observable<Actions>) => {
  return action$
    .filter(a => a.type === 'RESPONSE_SUBMIT_WEIGHT')
    .map(() => push('/'))
  ;
};

export default combineEpics(submitEpic, submitDoneEpic);
