import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const TodoControlsStyled = styled.div`
  display: ${props => props.show ? 'flex' : 'none'}
  align-items: center;
`

const EditLink = styled(Link)`
  padding-left: 1rem;
  font-size: 1.25rem;
  color: rgb(32, 32, 32);
  text-decoration: none;
`

const DeleteButton = styled.span`
  padding-left: 1rem;
  font-size: 2rem;
  color: tomato;
  cursor: pointer;
`

const TodoControls = ({ id, show, deleteTodo }) => (
  <TodoControlsStyled show={show}>
    <EditLink to={`/todos/${id}`}>
      Edit
    </EditLink>
    <DeleteButton onClick={() => deleteTodo(id)}>
      &times;
    </DeleteButton>
  </TodoControlsStyled>
)

export default TodoControls
