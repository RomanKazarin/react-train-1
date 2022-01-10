import React from 'react'
import PropTypes from 'prop-types'
import TodoItem from '../TodoItem/TodoItem'
import classes from './TodoList.module.css'

function TodoList(props) {
  return (
    <ul className={classes.TodoList}>
      {props.todos.map((todo, index) => {
        return (
          <TodoItem
            todo={todo}
            key={todo.id}
            index={index}
            onChange={props.onToggle}
          ></TodoItem>
        )
      })}
    </ul>
  )
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  onToggle: PropTypes.func.isRequired
}

export default TodoList
