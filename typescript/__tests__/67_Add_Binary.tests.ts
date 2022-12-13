import {expect, test} from '@jest/globals'
import {addBinary} from '../67_Add_Binary'

test('Example 1', () => {
    expect(addBinary('11', '1')).toStrictEqual('100')
})

test('Example 2', () => {
    expect(addBinary('1011', '1010')).toStrictEqual('10101')
  })