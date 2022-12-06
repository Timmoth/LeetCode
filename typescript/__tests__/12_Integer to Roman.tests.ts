import {expect, test} from '@jest/globals'
import {intToRoman} from '../12_Integer to Roman'

test('Example 1', () => {
  expect(intToRoman(3)).toStrictEqual('III')
})

test('Example 2', () => {
    expect(intToRoman(4)).toStrictEqual('IV')
  })

  test('Example 3', () => {
    expect(intToRoman(7)).toStrictEqual('VII')
  })
  
    
test('Example 4', () => {
    expect(intToRoman(58)).toStrictEqual('LVIII')
  })
  
  test('Example 5', () => {
      expect(intToRoman(1994)).toStrictEqual('MCMXCIV')
  })