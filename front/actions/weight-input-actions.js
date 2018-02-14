/* @flow */

export type ClearAllAction = {
  type: 'CLEAR_ALL';
};

export type DelAction = {
  type: 'DEL';
}

export type AddNumberAction = {
  type: 'ADD_NUMBER';
  body: {
    n: number;
  };
};

export type AddDotAction = {
  type: 'ADD_DOT';
};

export type Actions =
  ClearAllAction |
  DelAction |
  AddNumberAction |
  AddDotAction
;

export function clearAll(): ClearAllAction {
  return {
    type: 'CLEAR_ALL',
  };
}

export function del(): DelAction {
  return {
    type: 'DEL',
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

export function addDot(): AddDotAction {
  return {
    type: 'ADD_DOT',
  };
}
