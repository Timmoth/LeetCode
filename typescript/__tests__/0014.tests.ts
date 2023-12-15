import { expect, test } from '@jest/globals'
import { longestCommonPrefix } from '../0014'

test('Example 1', () => {
  expect(longestCommonPrefix(['flower', 'flow', 'flight'])).toStrictEqual('fl')
})

test('Example 2', () => {
  expect(longestCommonPrefix(['dog', 'racecar', 'car'])).toStrictEqual('')
})
