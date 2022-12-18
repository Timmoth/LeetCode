import {expect, test} from '@jest/globals'
import {majorityElement} from '../169_Majority_Element'

test('Example 1', () => {
    expect(majorityElement([2,2,1,1,1,2,2])).toStrictEqual(2)
})