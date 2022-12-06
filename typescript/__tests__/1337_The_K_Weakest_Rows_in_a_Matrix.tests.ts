import {expect, test} from '@jest/globals'
import {kWeakestRows} from '../1337_The_K_Weakest_Rows_in_a_Matrix'

test('Example 1', () => {
  expect(kWeakestRows(
    [[1,1,0,0,0],
    [1,1,1,1,0],
    [1,0,0,0,0],
    [1,1,0,0,0],
    [1,1,1,1,1]], 3)).toStrictEqual([2,0,3])
})

test('Example 2', () => {
  expect(kWeakestRows(
    [[1,0,0,0],
    [1,1,1,1],
    [1,0,0,0],
    [1,0,0,0]], 2)).toStrictEqual([0,2])
})