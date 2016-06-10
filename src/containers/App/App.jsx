import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Router, Route, Link } from 'react-router';

import BookState from 'state/BookState'

class AppContainer extends Component {

}
export default class App extends Component {
  render() {
    const pool = this.props.pool
    const entities = pool.query(BookState)
    console.log(entities)
    return (
      <div>
        { entities.map( (entity) => {
          const bookState = entity.getComponent(BookState)
          return this.renderComponent(bookState)
        }) }
        <button onClick={ this.onClickHandler.bind(this)}/>
      </div>

    )
  }

  onClickHandler () {
    let pool = this.props.pool
    pool
    .createEntity()
    .addComponent(BookState, { title: Math.random(), isbn: Math.random() })

    this.setState()
  }

  renderComponent (bookState) {
    return (
      <div> { bookState.title } </div>
    )
  }
}
