import {expect, test} from '@jest/globals'
import {longestCommonPrefix} from '../14_Longest_Common_Prefix'

test('Example 1', () => {
    expect(longestCommonPrefix(['flower','flow','flight'])).toStrictEqual('fl')
})

test('Example 2', () => {
    expect(longestCommonPrefix(['dog','racecar','car'])).toStrictEqual('')
  })