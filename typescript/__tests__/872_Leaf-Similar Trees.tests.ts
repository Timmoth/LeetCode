import {expect, test} from '@jest/globals'
import {TreeNode, leafSimilar} from '../872_Leaf-Similar_Trees'

test('Example 1', () => {
  expect(leafSimilar(new TreeNode(1, new TreeNode(2, null, null), new TreeNode(3, null, null)), new TreeNode(1, new TreeNode(2, null, null), new TreeNode(3, null, null)))).toBe(true)
})

test('Example 2', () => {
    expect(leafSimilar(new TreeNode(1, new TreeNode(2, null, null), new TreeNode(3, null, null)), new TreeNode(1, new TreeNode(4, null, null), new TreeNode(3, null, null)))).toBe(false)
  })