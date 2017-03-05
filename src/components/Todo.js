import React from 'react'
import styled from 'styled-components'

import Hoverable from './Hoverable'
import MultiSelect from '../containers/MultiSelectContainer'
import TodoControls from '../containers/TodoControlsContainer'
import TodoDate from './TodoDate'
import TodoText from './TodoText'

const TodoStyled = styled.li`
  box-sizing: border-box;
  background-color: rgb(255, 255, 255);
  border-bottom: 1px solid rgb(32, 32, 32);
  padding: 1rem;
  display: flex;

  &:last-child {
    border-bottom: none;
  }
`

const TodoDetails = styled.div`
  flex: 1;
  color: ${props => props.done ? 'rgb(128, 128, 128)' : 'rgb(0, 0, 0)'}
`

const Todo = ({ showMultiSelect, todo, toggleDoneStatus }) => (
  <Hoverable
    target={({ isHovered, ...props }) => (
      <TodoStyled {...props}>
        <TodoDetails done={todo.done} onClick={() => toggleDoneStatus(todo)}>
          <TodoText todo={todo.todo} done={todo.done} />
          <TodoDate date={todo.dateAdded} />
        </TodoDetails>
        <MultiSelect show={showMultiSelect} id={todo.id} />
        <TodoControls show={isHovered && !showMultiSelect} id={todo.id} />
      </TodoStyled>
    )}
  />
)

export default Todo
