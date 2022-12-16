import {expect, test} from '@jest/globals'
import {getRow} from '../119_Pascals_Triangle_II'

test('Example 1', () => {
    expect(getRow(3)).toStrictEqual([1,3,3,1])
})