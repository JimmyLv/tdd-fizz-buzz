import React, { useState } from 'react'
import styled from 'styled-components'
import { fizzBuzz } from '../utils/fizzBuzz'

export function FizzBuzz() {
  const [value, setValue] = useState(0)

  const selectNumber = number => {
    if (typeof value === 'number') {
      setValue(value * 10 + number)
    } else {
      setValue(number)
    }
  }

  return (
    <>
      <Result data-testid="result">{value}</Result>

      <ButtonPanel>
        {[7, 8, 9, 4, 5, 6, 1, 2, 3, 0].map(number => (
          <Button key={number} onClick={() => selectNumber(number)}>
            {number}
          </Button>
        ))}

        <Button onClick={() => setValue(0)}>C</Button>
        <Button orange onClick={() => setValue(fizzBuzz(value))}>
          =
        </Button>
      </ButtonPanel>
    </>
  )
}

const Result = styled.div`
  background-color: #858694;
  color: white;
  text-align: right;
  font-weight: 200;
  font-size: 2.5rem;
  padding: 20px;
`

const ButtonPanel = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-content: center;
  background-color: #858694;
`

const Button = styled.div`
  color: ${props => (props.orange ? '#fff' : '#000')};
  background-color: ${props => (props.orange ? '#f5923e' : '#e0e0e0')};
  flex-basis: calc(33.3% - 1px);
  text-align: center;
  font-size: 1.5rem;
  margin: 0 1px 1px 0;
  padding: 30px 0;
`
