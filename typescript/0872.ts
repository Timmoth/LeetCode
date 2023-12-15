export class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
  }
}

export function leafSimilar(
  root1: TreeNode | null,
  root2: TreeNode | null
): boolean {
  if (root1 == null && root2 == null) {
    return true
  }

  if (root1 == null || root2 == null) {
    return false
  }

  let leafNodes1 = new Array<number>()
  AddLeafNodes(root1, leafNodes1)
  let leafNodes2 = new Array<number>()
  AddLeafNodes(root2, leafNodes2)

  if (leafNodes1.length != leafNodes2.length) {
    return false
  }

  for (let i = 0; i < leafNodes1.length; i++) {
    if (leafNodes1[i] != leafNodes2[i]) {
      return false
    }
  }

  return true
}

function AddLeafNodes(node: TreeNode, leafNodes: Array<number>) {
  if (node.left == null && node.right == null) {
    leafNodes.push(node.val)
    return
  }

  if (node.left != null) {
    AddLeafNodes(node.left, leafNodes)
  }
  if (node.right != null) {
    AddLeafNodes(node.right, leafNodes)
  }
}
