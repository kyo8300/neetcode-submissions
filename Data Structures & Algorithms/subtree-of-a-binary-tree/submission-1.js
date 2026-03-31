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
                return true
            }
            return dfs(node.left) || dfs(node.right)
        }

        function isSameTree(tree, subTree) {
            if(!tree && !subTree) return true;
            if(!tree || !subTree) return false;

            const left = isSameTree(tree.left, subTree.left)
            const right = isSameTree(tree.right, subTree.right)
            return tree.val === subTree.val && left && right;
        }
        
        return dfs(root);
    }
}


