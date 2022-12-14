import {expect, test} from '@jest/globals'
import {generate} from '../118_Pascals_Triangle'

test('Example 1', () => {
    expect(generate(5)).toStrictEqual([[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]])
})