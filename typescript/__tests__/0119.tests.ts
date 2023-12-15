import { expect, test } from '@jest/globals'
import { getRow } from '../0119'

test('Example 1', () => {
  expect(getRow(3)).toStrictEqual([1, 3, 3, 1])
})
