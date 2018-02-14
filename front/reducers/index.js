/* @flow */

import { combineReducers } from 'redux';

import type {
  Actions,
} from '../actions/weight-input-actions';

export type WeightInputState = {
  weight: number;
  weightStr: string;
};

export type State = {
  weightInput: WeightInputState;
};

const initialState = {
  weight: 0,
  weightStr: '',
};

function weightInput(state: WeightInputState = initialState, action: Actions) {
  let { weightStr } = state;
  switch (action.type) {
    case 'CLEAR_ALL':
      return initialState;
    case 'DEL':
      weightStr = weightStr.length ? weightStr.slice(0, weightStr.length - 1) : '';
      return {
        ...state,
        weightStr,
        weight: +weightStr,
      };
    case 'ADD_NUMBER':
      weightStr = state.weightStr + action.body.n;
      return {
        ...state,
        weightStr,
        weight: +weightStr,
      };
    case 'ADD_DOT':
      if (/\./.test(weightStr)) {
        return state;
      } else {
        return {
          ...state,
          weightStr: weightStr + '.',
        };
      }
    default:
      return state;
  }
}

const reducers = {
  weightInput,
};
export default reducers;
