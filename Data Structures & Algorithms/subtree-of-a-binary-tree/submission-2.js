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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {
        const dfs = (node) => {
            if(!node) return false;

            if(isSameTree(node, subRoot)) {
                return true;
            }

            const left = dfs(node.left);
            const right = dfs(node.right);

            return left || right
        }

        const isSameTree = (treeA, treeB) => {
            if(!treeA && !treeB) return true;
            if(!treeA || !treeB) return false;
            if(treeA.val !== treeB.val) return false

            const left = isSameTree(treeA.left, treeB.left)
            const right = isSameTree(treeA.right, treeB.right)
            return left && right;
        }

        if(dfs(root)) return true;
        return false;
    }
}
