import { expect, test } from '@jest/globals'
import { removeDuplicates } from '../../Easy/0026'

test('Example 1', () => {
  expect(removeDuplicates([1, 1, 2])).toStrictEqual(2)
})

test('Example 2', () => {
  expect(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])).toStrictEqual(5)
})
