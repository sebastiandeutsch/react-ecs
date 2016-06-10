import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Router, Route, Link } from 'react-router';

export default class App extends Component {
  render() {
    return (
      <div>
        Hello World!
      </div>
    )
  }
}
