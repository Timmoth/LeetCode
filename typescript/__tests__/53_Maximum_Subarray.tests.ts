import {expect, test} from '@jest/globals'
import {maxSubArray} from '../53_Maximum_Subarray'

test('Example 1', () => {
  expect(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])).toBe(6)
})

test('Example 2', () => {
  expect(maxSubArray([1])).toBe(1)
})

test('Example 3', () => {
  expect(maxSubArray([5,4,-1,7,8])).toBe(23)
})