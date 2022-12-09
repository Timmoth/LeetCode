import {expect, test} from '@jest/globals'
import {permute} from '../46_Permutations'

test('Example 1', () => {
    expect(permute([1])).toStrictEqual([[1]])
})

test('Example 2', () => {
    expect(permute([0,1])).toStrictEqual([[0,1],[1,0]])
  })