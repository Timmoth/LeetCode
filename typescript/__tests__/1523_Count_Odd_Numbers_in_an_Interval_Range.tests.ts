import {expect, test} from '@jest/globals'
import {countOdds} from '../1523_Count_Odd_Numbers_in_an_Interval_Range'

test('Example 1', () => {
  expect(countOdds(3, 7)).toBe(3)
})

test('Example 2', () => {
  expect(countOdds(8, 10)).toBe(1)
})