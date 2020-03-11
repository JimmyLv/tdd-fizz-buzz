import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import { FizzBuzz } from './FizzBuzz'

describe('FizzBuzz UI', () => {
  test('should calculate FizzBuzz result when click 1 and 5 numbers', () => {
    // given
    const comp = render(<FizzBuzz />)

    // when
    userEvent.click(comp.queryByText(/1/))
    userEvent.click(comp.queryByText(/5/))
    userEvent.click(comp.queryByText(/=/))

    // then
    expect(comp.queryByTestId('result')).toHaveTextContent('FizzBuzz')
  })

  test('should reset FizzBuzz result to 0 when click C button', () => {
    // given
    const comp = render(<FizzBuzz />)
    expect(comp.queryByTestId('result')).toHaveTextContent('0')

    // when
    userEvent.click(comp.queryByText(/1/))
    expect(comp.queryByTestId('result')).toHaveTextContent('1')

    // then
    userEvent.click(comp.queryByText(/C/))
    expect(comp.queryByTestId('result')).toHaveTextContent('0')
  })

  test('should re-input number when click after calculate result', () => {
    // given
    const comp = render(<FizzBuzz />)

    // when
    userEvent.click(comp.queryByText(/3/))
    userEvent.click(comp.queryByText(/=/))
    expect(comp.queryByTestId('result')).toHaveTextContent('Fizz')

    // then
    userEvent.click(comp.queryByText(/5/))
    expect(comp.queryByTestId('result')).toHaveTextContent('5')
  })
})
