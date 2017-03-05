import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: ${props => props.show ? 'flex' : 'none'}
  align-items: center;
`

const MultiSelectStyled = styled.div`
  box-sizing: border-box;
  padding: 12px;
  border-radius: 50%;
  cursor: pointer;
  margin-left: .5rem;
  position: relative;

  &:after {
    content: ' ';
    background-color: ${props => props.selected ? 'rgb(231, 76, 60)' : 'rgb(255, 255, 255)'};
    padding: 12px;
    border-radius: 50%;
    position: absolute;
    top: 0;
    left: 0;
  }

  &:before {
    content: ' ';
    border: 1px solid rgb(231, 76, 60);
    padding: 14px;
    border-radius: 50%;
    position: absolute;
    top: -3px;
    left: -3px;
  }
`

const MultiSelect = ({ id, onClick, selected, show }) => (
  <Wrapper show={show}>
    <MultiSelectStyled onClick={() => { onClick(id) }} selected={selected} />
  </Wrapper>
)

export default MultiSelect
