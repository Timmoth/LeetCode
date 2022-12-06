import {expect, test} from '@jest/globals'
import {average} from '../1491_Average_Salary_Excluding_the_Minimum_and_Maximum_Salary'

test('Example 1', () => {
  expect(average([4000,3000,1000,2000])).toBe(2500.00000)
})

test('Example 2', () => {
  expect(average([1000,2000,3000])).toBe(2000.00000)
})