import React from 'react'
import styled from 'styled-components'

const TodoTextStyled = styled.div`
  font-size: 1.25rem;
  text-decoration: ${props => props.done ? 'line-through' : 'none'}
`

const TodoText = ({ todo, done }) => (
  <TodoTextStyled done={done}>
    {todo}
  </TodoTextStyled>
)

export default TodoText
