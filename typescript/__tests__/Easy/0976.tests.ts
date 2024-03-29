import { expect, test } from '@jest/globals'
import { largestPerimeter } from '../../Easy/0976'

test('Example 1', () => {
  expect(largestPerimeter([2, 1, 2])).toBe(5)
})

test('Example 2', () => {
  expect(largestPerimeter([1, 2, 1, 10])).toBe(0)
})
