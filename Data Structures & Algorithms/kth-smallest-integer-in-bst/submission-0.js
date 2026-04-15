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
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {
        const orderNumberArray = [];
        function dfs(node) {
            if(!node) return null;

            dfs(node.left);
            orderNumberArray.push(node.val)
            dfs(node.right);

            return node;
        }

        dfs(root)
        return orderNumberArray[k - 1];
    }
}


// left

// right

// left current right
