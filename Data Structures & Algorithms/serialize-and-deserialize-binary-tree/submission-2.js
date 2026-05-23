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

class Codec {
    /**
     * Encodes a tree to a single string.
     *
     * @param {TreeNode} root
     * @return {string}
     */
    serialize(root) {
        if(!root) return "#";
        let strArr = [];
        let queue = [root];
        while(queue.length) {
            const currentLevel = queue.length;
            let nextQueue = [];
            for(let i = 0; i < currentLevel; i++) {
                const node = queue[i];
                if(node) {
                    strArr.push(node.val);
                    nextQueue.push(node.left);
                    nextQueue.push(node.right);
                } else {
                    strArr.push("#");
                }
            }

            queue = nextQueue;
        }

        return strArr.join(',');
    }

    /**
     * Decodes your encoded data to tree.
     *
     * @param {string} data
     * @return {TreeNode}
     */
    deserialize(data) {
        if(data === "#") return new TreeNode([]);
        const vals = data.split(',');
        let idx = 1;
        let tree = new TreeNode(vals[0]);
        let queue = [tree];
        while(queue.length) {
            const currentLevel = queue.length;
            let nextQueue = [];
            for(let i = 0; i < currentLevel; i++) {
                const node = queue[i];
                if(vals[idx] !== "#") {
                    node.left = new TreeNode(vals[idx]);
                    nextQueue.push(node.left);
                }
                idx++
                if(vals[idx] !== "#") {
                    node.right = new TreeNode(vals[idx]);
                    nextQueue.push(node.right);
                }
                idx++
            }

            queue = nextQueue;
        }
        return tree;
    }
}
