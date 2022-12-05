import {expect, test} from '@jest/globals';
import {numberOfSteps} from '../1342_Number_Of_Steps_To_Reduce_A_Number_To_Zero';

test('Example 1', () => {
  expect(numberOfSteps(14)).toBe(6);
});

test('Example 2', () => {
    expect(numberOfSteps(8)).toBe(4);
  });

test('Example 3', () => {
    expect(numberOfSteps(123)).toBe(12);
});