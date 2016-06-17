import React, { Component, PropTypes } from 'react';

export default class Provider extends Component {
  static childContextTypes = {
    pool: React.PropTypes.any
  }

  constructor(props) {
    super(props)

    this.state = {
      pool: this.props.pool
    }
  }

  getChildContext() {
    return {
      pool: this.state.pool
    };
  }

  render() {
    const { pool, children } = this.props
    return children
  }
}
