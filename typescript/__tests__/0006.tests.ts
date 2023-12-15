import { expect, test } from '@jest/globals'
import { convert } from '../0006'

test('Example 1', () => {
  expect(convert('PAYPALISHIRING', 3)).toStrictEqual('PAHNAPLSIIGYIR')
})

test('Example 2', () => {
  expect(convert('PAYPALISHIRING', 4)).toStrictEqual('PINALSIGYAHRPI')
})

test('Example 3', () => {
  expect(convert('ABC', 1)).toStrictEqual('ABC')
})
