import { expect, test } from '@jest/globals'
import { maxProfit } from '../../Easy/0121'

test('Example 1', () => {
  expect(maxProfit([7, 1, 5, 3, 6, 4])).toStrictEqual(5)
})

test('Example 2', () => {
  expect(maxProfit([7, 6, 4, 3, 1])).toStrictEqual(0)
})
