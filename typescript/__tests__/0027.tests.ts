import { expect, test } from '@jest/globals'
import { removeElement } from '../0027'

test('Example 1', () => {
  expect(removeElement([3, 2, 2, 3], 2)).toStrictEqual(2)
})

test('Example 2', () => {
  expect(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2)).toStrictEqual(5)
})
