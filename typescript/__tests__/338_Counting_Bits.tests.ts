import {expect, test} from '@jest/globals'
import {countBits} from '../338_Counting_Bits'

test('Example 1', () => {
    expect(countBits(5)).toStrictEqual([0,1,1,2,1,2])
})