/* @flow */

import type { MiddlewareAPI } from 'redux';
import { Observable } from 'rxjs/Observable';
import { push } from 'react-router-redux';
import { combineEpics } from 'redux-observable';
import type { State } from '../reducers';
import type { Actions } from '../actions/weight-input-actions';
import { addMetric } from '../firebase/firestore/metrics';
import { currentDateString } from '../misc/date-util';

function submitWeight(weight: number, uid: string) {
  return addMetric({
    date: currentDateString(),
    type: 'weight',
    value: weight,
    uid,
  })
}

const submitEpic = (action$: Observable<Actions>, store: MiddlewareAPI<State, Actions>) =>
  action$
    .filter(a => a.type === 'SUBMIT_WEIGHT')
    .switchMap(() => submitWeight(store.getState().weightInput.weight, store.getState().account.me.uid))
    .map(() => ({ type: 'RESPONSE_SUBMIT_WEIGHT' }))
    // .do(x => console.log(x))
  ;

const submitDoneEpic = (action$: Observable<Actions>) => 
  action$
    .filter(a => a.type === 'RESPONSE_SUBMIT_WEIGHT')
    .map(() => push('/'))
  ;

export default combineEpics(submitEpic, submitDoneEpic);
