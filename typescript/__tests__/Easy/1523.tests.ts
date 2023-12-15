import { expect, test } from '@jest/globals'
import { countOdds } from '../../Easy/1523'

test('Example 1', () => {
  expect(countOdds(3, 7)).toBe(3)
})

test('Example 2', () => {
  expect(countOdds(8, 10)).toBe(1)
})
