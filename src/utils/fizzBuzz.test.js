import { fizzBuzz } from './fizzBuzz'

test('should return normal number string when given number', () => {
  // given
  const number = 1

  // when
  const result = fizzBuzz(number)

  // then
  expect(result).toBe('1')
})

test('should return Fizz string when given number is divisible by 3', () => {
  // given
  const number = 3

  // when
  const result = fizzBuzz(number)

  // then
  expect(result).toBe('Fizz')
})

test('should return Buzz string when given number is divisible by 5', () => {
  // given
  const number = 5

  // when
  const result = fizzBuzz(number)

  // then
  expect(result).toBe('Buzz')
})

test('should return FizzBuzz string when given number is divisible by 3 and 5', () => {
  // given
  const number = 15

  // when
  const result = fizzBuzz(number)

  // then
  expect(result).toBe('FizzBuzz')
})
