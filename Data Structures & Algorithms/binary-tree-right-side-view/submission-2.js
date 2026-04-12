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
     * @return {number[]}
     */
    rightSideView(root) {
        if(!root) return []
        let ans = [];
        let queue = [root];
        while(queue.length) {
            const len = queue.length;
            let nextQueue = [];
            for(let i = 0; i < len; i++) {
                const node = queue[i];
                if(i === len - 1) {
                    ans.push(node.val);
                }
                if(node.left) {
                    nextQueue.push(node.left)
                }
                if(node.right) {
                    nextQueue.push(node.right);
                }
            }

            queue = nextQueue;
        }

        return ans;
    }
}
