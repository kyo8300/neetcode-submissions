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
     * @return {boolean}
     */
    isValidBST(root) {
        let isValid = true;
        function dfs(node, min, max) {
            if(!node) return null;

            if(min >= node.val || node.val >= max) {
                console.log(min, max, node.val)
                isValid = false
            }

            dfs(node.left, min, Math.min(max, node.val));
            dfs(node.right, Math.max(min, node.val), max);

            return node
        }

        dfs(root, -1001, 1001)
        return isValid
    }
}
