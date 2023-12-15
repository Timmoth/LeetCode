import { expect, test } from '@jest/globals'
import { fib } from '../../Easy/0509'

test('Example 1', () => {
  expect(fib(2)).toStrictEqual(1)
})

test('Example 2', () => {
  expect(fib(3)).toStrictEqual(2)
})
