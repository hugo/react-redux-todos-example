import React from 'react'
import styled from 'styled-components'

const EditableTodoStyled = styled.div`
  background-color: rgb(255, 255, 255);
  border: 1px solid rgb(0, 0, 0);
  padding: 1rem;
`

const TodoTitle = styled.h2`
  padding-left: 1rem;
`

const TodoInput = styled.input`
  box-sizing: border-box;
  font-size: 1.25rem;
  padding: 1rem;
  border: none;
  width: 100%;
  appearance: none;
  display: block;

  &:focus {
    outline: none;
  }
`

const Controls = styled.div`
  margin-top: 1rem;
  text-align: right;
`

const Control = styled.span`
  color: rgb(255, 255, 255)
  font-size: 1.25rem;
  margin-left: 1rem;


  &:hover {
    cursor: pointer;
  }
`

const EditableTodo = ({ onChangeTodo, onSaveTodo, onCancelTodo, todo }) => (
  <div>
    <EditableTodoStyled>
      <TodoTitle>Title</TodoTitle>
      <TodoInput
        defaultValue={todo}
        placeholder='What do you need to do?'
        onChange={(event) => onChangeTodo(event.target.value)}
      />
    </EditableTodoStyled>

    <Controls>
      <Control onClick={onSaveTodo}>Save</Control>
      <Control onClick={onCancelTodo}>Cancel</Control>
    </Controls>
  </div>
)

export default EditableTodo
