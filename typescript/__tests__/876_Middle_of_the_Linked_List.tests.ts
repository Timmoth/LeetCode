import {expect, test} from '@jest/globals';
import {ListNode, middleNode} from '../876_Middle_of_the_Linked_List';

test('Example 1', () => {
  expect(middleNode(new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5, null))))))!.val).toBe(3);
});

test('Example 2', () => {
  expect(middleNode(new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5, new ListNode(6, null)))))))!.val).toBe(4);
  });
