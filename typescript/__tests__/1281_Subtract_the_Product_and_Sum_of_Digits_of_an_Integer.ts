import {expect, test} from '@jest/globals';
import {subtractProductAndSum} from '../1281_Subtract_the_Product_and_Sum_of_Digits_of_an_Integer';

test('Example 1', () => {
  expect(subtractProductAndSum(234)).toBe(15);
});

test('Example 2', () => {
  expect(subtractProductAndSum(4421)).toBe(21);
});