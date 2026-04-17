/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    maxPathSum(root) {
        let maxPathSum = -1001;
        function dfs(node) {
            if(!node) return 0;

            const left = dfs(node.left)
            const right = dfs(node.right);

            maxPathSum = Math.max(maxPathSum, left + right + node.val, node.val, right + node.val, left + node.val);

            return Math.max(node.val, node.val + left, node.val + right);
        }

        dfs(root);
        return maxPathSum
    }
}
