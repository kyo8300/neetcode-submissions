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
        function bfs(node, min, max) {
            if(!node) return true;
            if(node.val >= max || node.val <= min) {
                return false
            }

            const left = bfs(node.left, min, node.val);
            const right = bfs(node.right, node.val, max);

            return left && right
        }

        return bfs(root, -Infinity, Infinity)
    }
}
