/* @flow */

import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import type { State } from '../reducers';
import WeightInput from '../components/weight-input/weight-input';
import { addNumber, clearAll, del, addDot, submitWeight } from '../actions/weight-input-actions';

const App = (props) => (
  <WeightInput {...props} />
);

const mapStateToProps = (state: State): { weightStr: string, isSubmitting: boolean } => state.weightInput;

const mapDispatchToPropos = (dispatch) => ({
  clearAll: bindActionCreators(clearAll, dispatch),
  del: bindActionCreators(del, dispatch),
  addNumber: bindActionCreators(addNumber, dispatch),
  addDot: bindActionCreators(addDot, dispatch),
  submit: bindActionCreators(submitWeight, dispatch),
});

export default connect(mapStateToProps, mapDispatchToPropos)(App);
