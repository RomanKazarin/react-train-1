import React, { useContext } from 'react'
import Context from '../../context'
import PropTypes from 'prop-types'
import classes from './TodoItem.module.css'

function TodoItem({ todo, index, onChange }) {
  const { removeTodo } = useContext(Context)
  const cls = [classes.TodoItem]

  if (todo.complited) {
    cls.push(classes.done)
  }

  return (
    <li className={cls.join(' ')}>
      <span>
        <input
          type="checkbox"
          onChange={() => onChange(todo.id)}
          checked={todo.complited}
        />
        <strong>{index + 1}. </strong>
        {todo.title}
      </span>

      <button onClick={() => removeTodo(todo.id)}>&times;</button>
    </li>
  )
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired
}

export default TodoItem
