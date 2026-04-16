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
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    buildTree(preorder, inorder) {
        const map = new Map();
        for(let i = 0; i < inorder.length; i++) {
            map.set(inorder[i], i);
        }

        function createTree(left, right){
            if(left > right) return null;

            const val = preorder.shift();
            const tree = new TreeNode(val);
            const index = map.get(val);
            tree.left = createTree(left, index - 1)
            tree.right = createTree(index + 1,right)

            return tree
        }

        return createTree(0, inorder.length - 1);
    }
}
