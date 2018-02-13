/* @flow */

import React from 'react';

type WeightInputProps = {
  weightStr: string;
  clearAll: () => void;
  addNumber: (n: number) => void;
};

const WeightInput = ({ weightStr, addNumber, clearAll }: WeightInputProps) => (
  <div>
    
    <div>weight: {weightStr}</div>
    <button onClick={() => addNumber(1)}>1</button>
    <button onClick={() => clearAll()}>clear</button>
  </div>
);

export default WeightInput;
