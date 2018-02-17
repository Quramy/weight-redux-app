/* @flow */

// import { combineReducers } from 'redux';

import type { User } from 'firebase';
import type {
  Actions,
} from '../actions/weight-input-actions';

export type WeightInputState = {
  isSubmitting: boolean;
  weight: number;
  weightStr: string;
};

export type AccountState = {
  me: User;
};

export type State = {
  weightInput: WeightInputState;
  account: AccountState;
};

const initialState = {
  isSubmitting: false,
  weight: 0,
  weightStr: '',
};

function account(state: AccountState = { me: null }) {
  return state;
}

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
      }
      return {
        ...state,
        weightStr: `${weightStr}.`,
      };
    case 'SUBMIT_WEIGHT':
      return {
        ...state,
        isSubmitting: true,
      };
    case 'RESPONSE_SUBMIT_WEIGHT':
      return {
        ...state,
        isSubmitting: false,
      };
    default:
      return state;
  }
}

const reducers = {
  account,
  weightInput,
};
export default reducers;
