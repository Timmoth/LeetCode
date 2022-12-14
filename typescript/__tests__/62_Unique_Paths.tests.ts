import {expect, test} from '@jest/globals'
import {uniquePaths} from '../62_Unique_Paths'

test('Example 1', () => {
    expect(uniquePaths(3, 7)).toStrictEqual(28)
})