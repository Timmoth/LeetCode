import { expect, test } from '@jest/globals'
import { lengthOfLastWord } from '../0058'

test('Example 1', () => {
  expect(lengthOfLastWord('Hello World')).toStrictEqual(5)
})

test('Example 2', () => {
  expect(lengthOfLastWord('   fly me   to   the moon  ')).toStrictEqual(4)
})

test('Example 3', () => {
  expect(lengthOfLastWord('a')).toStrictEqual(1)
})
