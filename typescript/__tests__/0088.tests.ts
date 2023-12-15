import { expect, test } from '@jest/globals'
import { merge } from '../0088'

test('Example 1', () => {
  expect(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)).toStrictEqual([
    1, 2, 2, 3, 5, 6,
  ])
})
