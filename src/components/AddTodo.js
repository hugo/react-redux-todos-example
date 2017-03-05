import React from 'react'

import EditableTodo from './EditableTodo'

const AddTodo = ({ onCancelTodo, onSaveTodo, onChangeTodo, todo }) => (
  <EditableTodo
    onCancelTodo={onCancelTodo}
    onSaveTodo={() => onSaveTodo(todo)}
    onChangeTodo={onChangeTodo}
  />
)

export default AddTodo
