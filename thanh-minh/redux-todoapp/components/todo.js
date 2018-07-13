import React from 'react'
import PropTypes from 'prop-types'

const Todo = ({ onClick, completed, text, removeTodo }) => (
  <li>
   <span
    onClick={onClick}
    style={ {
      textDecoration: completed ? 'line-through' : 'none'
    }}
   > 
   {text} 
   </span>
   <button onClick={removeTodo}>X</button>
  </li>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo