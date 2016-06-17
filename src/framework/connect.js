import React, { Component, PropTypes } from 'react';

export default function connect() {
  return function wrapWithConnect(WrappedComponent) {
    class Connect extends Component {
      static contextTypes = {
       pool: React.PropTypes.any
      }

      constructor(props, context) {
        super(props, context)

        this.pool = props.pool || context.pool

        this.state = {
          pool: this.pool
        }
      }

      poolListener() {
        this.setState({
          pool: this.pool
        })
      }

      componentDidMount() {
        this.unsubscribe = this.pool.subscribe(this.poolListener.bind(this))
      }

      componentWillUnmount() {
        if (this.unsubscribe) {
          this.unsubscribe()
          this.unsubscribe = null
        }
      }

      render() {
        return <WrappedComponent {...this.props} pool={this.state.pool} />
      }
    }

    return Connect
  }
}
