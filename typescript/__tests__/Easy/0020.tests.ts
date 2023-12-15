import { expect, test } from '@jest/globals'
import { isValid } from '../../Easy/0020'

test('Example 1', () => {
  expect(isValid('{}')).toStrictEqual(true)
})

test('Example 2', () => {
  expect(isValid('()[]{}')).toStrictEqual(true)
})

test('Example 3', () => {
  expect(isValid('(]')).toStrictEqual(false)
})
