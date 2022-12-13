import {expect, test} from '@jest/globals'
import {mySqrt} from '../69_Sqrt(x)'

test('Example 1', () => {
    expect(mySqrt(4)).toStrictEqual(2)
})

test('Example 2', () => {
    expect(mySqrt(8)).toStrictEqual(2)
  })