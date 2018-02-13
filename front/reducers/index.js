/* @flow */

import { combineReducers } from 'redux';

import type {
  Actions,
} from '../actions/weight-input-actions';

export type WeightInputState = {
  weight: number;
  weightStr: string;
};

const initialState = ({
  weight: 0,
  weightStr: '',
} : WeightInputState);

function weightInput(state = initialState, action: Actions) {
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

const reducer = combineReducers({
  weightInput,
});

type ExtractReturnType = <R>(() => R) => R;
export type State = $Call<ExtractReturnType, reducer>;

export default reducer;
