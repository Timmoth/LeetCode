import { expect, test } from '@jest/globals'
import { hammingWeight } from '../../Easy/0191'

test('Example 1', () => {
  expect(hammingWeight(11)).toBe(3)
})

test('Example 2', () => {
  expect(hammingWeight(128)).toBe(1)
})
