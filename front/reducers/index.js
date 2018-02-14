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
  switch (action.type) {
    case 'CLEAR_ALL':
      return initialState;
    case 'ADD_NUMBER':
      const weightStr = state.weightStr + action.body.n;
      return {
        ...state,
        weightStr,
        weight: +weightStr,
      };
    default:
      return state;
  }
}

const reducers = {
  weightInput,
};
export default reducers;
