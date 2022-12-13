import {expect, test} from '@jest/globals'
import {isValid} from '../20_Valid_Parentheses'

test('Example 1', () => {
    expect(isValid('{}')).toStrictEqual(true)
})

test('Example 2', () => {
    expect(isValid('()[]{}')).toStrictEqual(true)
  })

test('Example 3', () => {
    expect(isValid('(]')).toStrictEqual(false)
  })