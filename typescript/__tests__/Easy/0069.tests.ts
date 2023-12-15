import { expect, test } from '@jest/globals'
import { mySqrt } from '../../Easy/0069'

test('Example 1', () => {
  expect(mySqrt(4)).toStrictEqual(2)
})

test('Example 2', () => {
  expect(mySqrt(8)).toStrictEqual(2)
})
