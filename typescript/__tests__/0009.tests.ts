import { expect, test } from '@jest/globals'
import { isPalindrome } from '../0009'

test('Example 1', () => {
  expect(isPalindrome(121)).toBe(true)
})

test('Example 2', () => {
  expect(isPalindrome(-121)).toBe(false)
})

test('Example 3', () => {
  expect(isPalindrome(123)).toBe(false)
})

test('Example 4', () => {
  expect(isPalindrome(10)).toBe(false)
})
