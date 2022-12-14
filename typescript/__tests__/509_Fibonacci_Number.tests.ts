import {expect, test} from '@jest/globals'
import {fib} from '../509_Fibonacci_Number'

test('Example 1', () => {
    expect(fib(2)).toStrictEqual(1)
})

test('Example 2', () => {
    expect(fib(3)).toStrictEqual(2)
  })