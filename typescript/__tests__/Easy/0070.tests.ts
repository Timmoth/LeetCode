import { expect, test } from '@jest/globals'
import { climbStairs } from '../../Easy/0070'

test('Example 1', () => {
  expect(climbStairs(2)).toStrictEqual(2)
})

test('Example 2', () => {
  expect(climbStairs(3)).toStrictEqual(3)
})
