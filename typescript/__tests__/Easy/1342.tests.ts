import { expect, test } from '@jest/globals'
import { numberOfSteps } from '../../Easy/1342'

test('Example 1', () => {
  expect(numberOfSteps(14)).toBe(6)
})

test('Example 2', () => {
  expect(numberOfSteps(8)).toBe(4)
})

test('Example 3', () => {
  expect(numberOfSteps(123)).toBe(12)
})
