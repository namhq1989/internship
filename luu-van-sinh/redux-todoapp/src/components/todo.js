import React from 'react'
import PropTypes from 'prop-types'

const Todo = ({ onClick, completed, text, deleteTodo }) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    <button onClick={deleteTodo}>
      x
    </button>
    {text}
  </li>
)
Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}
export default Todo
