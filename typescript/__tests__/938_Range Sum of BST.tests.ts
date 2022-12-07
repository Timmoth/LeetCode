import {expect, test} from '@jest/globals'
import {rangeSumBST, TreeNode} from '../938_Range Sum of BST'

test('Example 1', () => {
  expect(rangeSumBST(new TreeNode(10, new TreeNode(5, new TreeNode(3, null, null), new TreeNode(7, null, null)), new TreeNode(15, null, new TreeNode(18, null, null))), 7, 15)).toBe(32)
})