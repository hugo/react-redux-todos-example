import React from 'react'
import styled from 'styled-components'

import Todo from '../containers/TodoContainer'

const TodoListStyled = styled.ul`
  box-sizing: border-box;
  list-style: none;
  padding: 0;
  margin: 0;
  border: 1px solid rgb(32, 32, 32);
`

const TodoList = ({ todos, showMultiSelect }) => (
  <TodoListStyled>
    {todos.map((todo) => (
       <Todo
         key={todo.id}
         showMultiSelect={showMultiSelect}
         todo={todo}
      />
     ))}
  </TodoListStyled>
)

export default TodoList
