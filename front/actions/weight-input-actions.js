/* @flow */

export type ClearAllAction = {
  type: 'CLEAR_ALL';
};

export type AddNumberAction = {
  type: 'ADD_NUMBER';
  body: {
    n: number;
  };
};

export type Actions = ClearAllAction | AddNumberAction;

export function clearAll(): ClearAllAction {
  return {
    type: 'CLEAR_ALL',
  };
}

export function addNumber(n: number): AddNumberAction {
  return {
    type: 'ADD_NUMBER',
    body: {
      n,
    },
  };
}
