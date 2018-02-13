/* @flow */

import React from 'react';
import { render } from 'react-dom';
import Header from './header/header';

const elm = document.getElementById('app');

if (elm) {
  render(<Header />, elm);
}
