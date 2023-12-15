import { expect, test } from '@jest/globals'
import { rob } from '../../Medium/0198'

test('Example 1', () => {
  expect(rob([1, 2, 3, 1])).toStrictEqual(4)
})

test('Example 2', () => {
  expect(rob([2, 7, 9, 3, 1])).toStrictEqual(12)
})

test('Example 3', () => {
  expect(rob([1, 2])).toStrictEqual(2)
})

test('Example 4', () => {
  expect(rob([2, 1, 1, 2])).toStrictEqual(4)
})
