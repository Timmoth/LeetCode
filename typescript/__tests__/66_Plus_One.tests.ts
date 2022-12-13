import {expect, test} from '@jest/globals'
import {plusOne} from '../66_Plus_One'

test('Example 1', () => {
    expect(plusOne([1,2,3])).toStrictEqual([1,2,4])
})

test('Example 2', () => {
    expect(plusOne([9])).toStrictEqual([1,0])
  })