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
     * @return {number[][]}
     */
    levelOrder(root) {
        if(!root) return [];
        const ans = [];
        let queue = [root];
        let level = 0;
        while(queue.length) {
            let nextQueue = [];
            const lengthOfNodes = queue.length;
            for(let i = 0; i < lengthOfNodes; i++){
                const node = queue[i];
                if(i === 0) {
                    ans.push([node.val]);
                } else {
                    ans[level].push(node.val);
                }

                if(node.left){
                    nextQueue.push(node.left);
                }if(node.right){
                    nextQueue.push(node.right);
                }
            } 

            level += 1
            queue = nextQueue;
        }
        return ans;
    }
}

class Tree {
    constructor(val = null, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

// const input = [1, 2, 3, 4, 5, 6]
// const output = [[1], [2, 3], [4,5,6]]

//               1
//            /     \
//           2       3
//          / \     / 
//         4   5   6
