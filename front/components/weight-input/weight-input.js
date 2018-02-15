/* @flow */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';

type WeightInputProps = {
  weightStr: string;
  isSubmitting: boolean;
  clearAll: () => void;
  del: () => void;
  addDot: () => void;
  addNumber: (n: number) => void;
  submit: () => void;
};

const WeightInput = ({ weightStr, addNumber, clearAll, del, addDot, submit, isSubmitting }: WeightInputProps) => (
  <div>
    <div>weight: {weightStr}</div>
    <button onClick={() => clearAll()}>clear</button>
    <button onClick={() => del()}>del</button>
    <table>
      <tbody>
        <tr>
          <td onClick={() => addNumber(7)}>7</td>
          <td onClick={() => addNumber(8)}>8</td>
          <td onClick={() => addNumber(9)}>9</td>
        </tr>
        <tr>
          <td onClick={() => addNumber(4)}>4</td>
          <td onClick={() => addNumber(5)}>5</td>
          <td onClick={() => addNumber(6)}>6</td>
        </tr>
        <tr>
          <td onClick={() => addNumber(1)}>1</td>
          <td onClick={() => addNumber(2)}>2</td>
          <td onClick={() => addNumber(3)}>3</td>
        </tr>
        <tr>
          <td />
          <td onClick={() => addNumber(0)}>0</td>
          <td onClick={() => addDot()}>.</td>
        </tr>
      </tbody>
    </table>
    <button onClick={() => submit()}>{isSubmitting ? 'isSubmitting' : 'submit'}</button>
  </div>
);

export default WeightInput;
