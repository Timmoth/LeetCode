import { expect, test } from '@jest/globals'
import { uniquePaths } from '../0062'

test('Example 1', () => {
  expect(uniquePaths(3, 7)).toStrictEqual(28)
})
