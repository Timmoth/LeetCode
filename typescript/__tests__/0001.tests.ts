import { expect, test } from '@jest/globals'
import { twoSum } from '../0001'

test('Example 1', () => {
  expect(twoSum([2, 7, 11, 15], 9)).toStrictEqual([0, 1])
})

test('Example 2', () => {
  expect(twoSum([3, 2, 4], 6)).toStrictEqual([1, 2])
})

test('Example 3', () => {
  expect(twoSum([3, 3], 6)).toStrictEqual([0, 1])
})
