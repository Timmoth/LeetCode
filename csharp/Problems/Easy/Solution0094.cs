namespace Problems.Easy
{
    public class Solution0094
    {
        public IList<int> InorderTraversal(TreeNode root)
        {
            var visited = new List<int>();
            Traverse(visited, root);
            return visited;
        }

        public static void Traverse(List<int> visited, TreeNode node)
        {
            if(node == null) return;

            Traverse(visited, node.left);

            visited.Add(node.val);

            Traverse(visited, node.right);
        }

        public class TreeNode
        {
            public int val;
            public TreeNode left;
            public TreeNode right;
            public TreeNode(int val = 0, TreeNode left = null, TreeNode right = null)
            {
                this.val = val;
                this.left = left;
                this.right = right;
            }
        }
    }
}
