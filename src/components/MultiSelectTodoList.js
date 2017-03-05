import React, { Component } from 'react'
import styled from 'styled-components'

import TodoList from './TodoList'

const AddTodo = styled.div`
  padding: 2rem;
  text-align: center;
  font-size: 1.5rem;
  color: rgb(255, 255, 255);
  text-decoration: none;

  &:hover {
    cursor: pointer;
  }
`

const DeleteSelected = styled.div`
  padding: 2rem;
  font-size: 1.25rem;
  color: rgb(255, 255, 255);
  text-align: center;

  &:hover {
    cursor: pointer;
  }
`

const SelectMultiple = styled.div`
  padding-top: .25rem;
  padding-bottom: 1rem;
  color: rgb(255, 255, 255);
  text-align: right;
  font-size: 1.25rem;

  &:hover {
    cursor: pointer;
  }
`

const NoTodos = styled.div`
  padding: 1rem;
  background-color: rgb(255, 255, 255);
  text-align: center;
  border: 1px solid rgb(32, 32, 32);
`

class MultiSelectTodoList extends Component {
  componentDidMount() {
    this.props.fetchAllTodos()
  }

  render() {
    const {
      active,
      addTodo,
      multiSelectEnd,
      multiSelectStart,
      todos,
      selectedIds,
      deleteSelectedTodos
    } = this.props

    return (
      <div>
        {todos.length > 0 ? (
          <div>
            {active ? (
              <SelectMultiple onClick={multiSelectEnd}>
                Cancel
              </SelectMultiple>
            ) : (
              <SelectMultiple onClick={multiSelectStart}>
                Select multiple
              </SelectMultiple>
            )}
            <TodoList todos={todos} showMultiSelect={active} />
          </div>
        ) : (
          <NoTodos>
            No todos to show
          </NoTodos>
        )}
        {active ? (
          <DeleteSelected onClick={() => deleteSelectedTodos(selectedIds)}>
            Delete selected
          </DeleteSelected>
        ) : (
          <AddTodo onClick={addTodo}>
            &#43; Add a todo
          </AddTodo>
        )}
      </div>
    )
  }
}

export default MultiSelectTodoList
