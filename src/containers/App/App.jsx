import React, { Component, PropTypes } from 'react';
import connect from 'framework/connect';

import BookState from 'state/BookState'

export class App extends Component {

  render() {
    const pool = this.props.pool

    const entities = pool.query(BookState)
    console.log(entities)
    return (
      <div>
        <button onClick={ this.onClickHandler.bind(this)}>Add one</button>
        { entities.map( (entity, key) => {
          const bookState = entity.getComponent(BookState)
          return <div key={key}> { bookState.title } </div>
        }) }
      </div>
    )
  }

  onClickHandler () {
    const pool = this.props.pool

    .createEntity()
    .addComponent(BookState, { title: Math.random(), isbn: Math.random() })
  }

}

export default connect()(App)
