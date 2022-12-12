import {expect, test} from '@jest/globals'
import {singleNumber} from '../136_Single_Number'

test('Example 1', () => {
  expect(singleNumber([2,2,1])).toBe(1)
})

test('Example 2', () => {
  expect(singleNumber([4,1,2,1,2])).toBe(4)
})

test('Example 3', () => {
    expect(singleNumber([1])).toBe(1)
  })