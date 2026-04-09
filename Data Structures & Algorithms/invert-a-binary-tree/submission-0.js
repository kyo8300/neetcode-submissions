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
     * @return {TreeNode}
     */
    invertTree(root) {
        if(!root) return root;
        let queue = [root];
        while(queue.length) {
            let nextQueue = [];
            const currentLevel = queue.length;
            for(let i = 0; i < currentLevel; i++) {
                const node = queue[i];
                const tmp = node?.left;
                node.left = node?.right;
                node.right = tmp;

                if(node.left) {
                    nextQueue.push(node.left);
                }
                if(node.right) {
                    nextQueue.push(node.right);
                }
            }

            queue = nextQueue;
        }

        return root
    }
}
