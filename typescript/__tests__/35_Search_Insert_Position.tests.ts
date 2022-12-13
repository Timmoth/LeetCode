import {expect, test} from '@jest/globals'
import {searchInsert} from '../35_Search_Insert_Position'

test('Example 1', () => {
    expect(searchInsert([1,3,5,6], 5)).toStrictEqual(2)
})

test('Example 2', () => {
    expect(searchInsert([1,3,5,6], 2)).toStrictEqual(1)
  })