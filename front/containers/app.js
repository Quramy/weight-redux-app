/* @flow */

import type { State } from '../reducers';
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import WeightInput from '../components/weight-input/weight-input';
import { addNumber, clearAll } from '../actions/weight-input-actions';

const App = (props) => (
  <WeightInput {...props} />
);

const mapStateToProps = (state: State): { weightStr: string } => {
  return state.weightInput;  // TODO how strict typed?
};

const mapDispatchToPropos = (dispatch) => {
  return {
    addNumber: bindActionCreators(addNumber, dispatch),
    clearAll: bindActionCreators(clearAll, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToPropos)(App);
