import { expect, test } from '@jest/globals'
import { subtractProductAndSum } from '../../Easy/1281'

test('Example 1', () => {
  expect(subtractProductAndSum(234)).toBe(15)
})

test('Example 2', () => {
  expect(subtractProductAndSum(4421)).toBe(21)
})
