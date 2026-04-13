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
    goodNodes(root) {
        if(!root) return 0;
        let ans = 0;
        let queue = [[root, -101]];
        while(queue.length) {
            let nextQueue = [];
            const curLen = queue.length;
            for(let i = 0; i < curLen; i++) {
                const [node, maxValue] = queue[i];
                if(node.val >= maxValue) {
                    ans++;
                }

                if(node.left) {
                    nextQueue.push([node.left, Math.max(node.val, maxValue)])
                }

                if(node.right) {
                    nextQueue.push([node.right, Math.max(node.val, maxValue)])
                }
            }

            queue = nextQueue;
        }

        return ans;
    }
}
