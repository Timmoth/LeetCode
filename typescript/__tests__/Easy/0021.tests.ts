import { expect, test } from '@jest/globals'
import { mergeTwoLists, ListNode } from '../../Easy/0021'

test('Example 1', () => {
  expect(
    mergeTwoLists(
      new ListNode(1, new ListNode(2, new ListNode(4, null))),
      new ListNode(1, new ListNode(3, new ListNode(4, null)))
    )
  ).toStrictEqual(
    new ListNode(
      1,
      new ListNode(
        1,
        new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(4, null))))
      )
    )
  )
})
