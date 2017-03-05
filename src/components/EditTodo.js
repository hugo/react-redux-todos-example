import React, { Component } from 'react'

import EditableTodo from './EditableTodo'


class EditTodo extends Component {
  componentWillMount() {
    this.props.loadTodo(this.props.id)
  }

  render() {
    const { onChangeTodo, onCancelTodo, onSaveTodo, todo } = this.props

    return (
      todo.todo ? (
        <EditableTodo
          onChangeTodo={(text) => onChangeTodo({ ...todo, todo: text })}
          onCancelTodo={() => onCancelTodo(todo)}
          onSaveTodo={() => onSaveTodo(todo)}
          todo={todo.todo}
        />
      ) : (
        <p>Loading...</p>
      )
    )
  }
}

export default EditTodo
