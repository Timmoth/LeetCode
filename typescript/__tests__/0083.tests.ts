import { expect, test } from '@jest/globals'
import { deleteDuplicates, ListNode } from '../0083'

test('Example 1', () => {
  expect(
    deleteDuplicates(new ListNode(1, new ListNode(1, new ListNode(2, null))))
  ).toStrictEqual(new ListNode(1, new ListNode(2, null)))
})
