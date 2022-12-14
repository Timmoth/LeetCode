import {expect, test} from '@jest/globals'
import {deleteDuplicates, ListNode} from '../83_Remove_Duplicates_from_Sorted_List'

test('Example 1', () => {
    expect(deleteDuplicates(new ListNode(1, new ListNode(1, new ListNode(2, null))))).toStrictEqual(new ListNode(1, new ListNode(2, null)))
})