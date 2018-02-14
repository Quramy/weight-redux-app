/* @flow */

import React from 'react';

type WeightInputProps = {
  weightStr: string;
  clearAll: () => void;
  del: () => void;
  addDot: () => void;
  addNumber: (n: number) => void;
};

const WeightInput = ({ weightStr, addNumber, clearAll, del, addDot }: WeightInputProps) => (
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
          <td></td>
          <td onClick={() => addNumber(0)}>0</td>
          <td onClick={() => addDot()}>.</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default WeightInput;
