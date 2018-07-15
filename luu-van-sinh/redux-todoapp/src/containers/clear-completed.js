import React from 'react'
import { connect } from 'react-redux'
import { clearCompleted } from '../actions';

const Button = ({ dispatch }) => {
  return (
    <button
      onClick={() => dispatch(clearCompleted())}
      style={{ marginLeft: '10px' }}
    >
      Clear Completed
    </button>
  )
}
export default connect()(Button)
