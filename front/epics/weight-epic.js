/* @flow */

import type { MiddlewareAPI } from 'redux';
import type { State } from '../reducers';
import type { Actions } from '../actions/weight-input-actions';
import { Observable } from 'rxjs/Observable';

// TODO 
// replace calling API
function submitWeight(weight: number) {
  console.log('submitting', weight);
  return new Promise((res, rej) => {
    setTimeout(() => res(), 1000);
  });
}

const weightEpic = (action$: Observable<Actions>, store: MiddlewareAPI<State, Actions>) => {
  const { weightInput } = store.getState();
  return action$
    .filter(a => a.type === 'SUBMIT_WEIGHT')
    .switchMap(() => submitWeight(weightInput.weight))
    .map(() => ({ type: 'RESPONSE_SUBMIT_WEIGHT' }))
    .do(x => console.log(x))
  ;
};

export default weightEpic;
