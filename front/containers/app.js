/* @flow */

import type { State } from '../reducers';
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import WeightInput from '../components/weight-input/weight-input';
import { addNumber, clearAll, del, addDot, } from '../actions/weight-input-actions';

const App = (props) => (
  <WeightInput {...props} />
);

const mapStateToProps = (state: State): { weightStr: string } => {
  return state.weightInput;
};

const mapDispatchToPropos = (dispatch) => {
  return {
    clearAll: bindActionCreators(clearAll, dispatch),
    del: bindActionCreators(del, dispatch),
    addNumber: bindActionCreators(addNumber, dispatch),
    addDot: bindActionCreators(addDot, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToPropos)(App);
