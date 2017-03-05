import React from 'react'
import styled from 'styled-components'

const twoDigits = (d) => d > 9 ? d : `0${d}`

const TodoDateStyled = styled.div`
  font-size: 0.75rem;
  padding-top: .25rem;
  padding-bottom: .25rem;
`

const TodoDate = ({ date }) => {
  const minutes = date.getMinutes()
  const hours = date.getHours()
  const day = twoDigits(date.getDate())
  const month = twoDigits(date.getMonth() + 1)
  const year = date.getFullYear()

  return (
    <TodoDateStyled>
      {`${day}/${month}/${year} @${hours}:${minutes}`}
    </TodoDateStyled>
  )
}

export default TodoDate
