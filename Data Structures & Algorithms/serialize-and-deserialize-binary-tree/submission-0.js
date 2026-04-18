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

        const treeArray = [];
        let queue = [root];
        while(queue.length) {
            let nextQueue = [];
            for(let i = 0; i < queue.length; i++) {
                const node = queue[i];

                if(!node) {
                    treeArray.push("#")
                } else {
                    treeArray.push(node.val)
                    nextQueue.push(node.left)
                    nextQueue.push(node.right)
                }
            }
            queue = nextQueue;
        }

        return treeArray.join(",")
    }

    /**
     * Decodes your encoded data to tree.
     *
     * @param {string} data
     * @return {TreeNode}
     */
    deserialize(data) {
        const treeArray = data.split(",")
        if(treeArray[0] === "#") return null

        let root = new TreeNode(parseInt(treeArray[0]))
        let queue = [root];
        let index = 1;

        while(queue.length) {
            let nextQueue = [];
            for(let i = 0; i < queue.length; i++) {
                const node = queue[i];

                if(treeArray[index] !== "#") {
                    node.left = new TreeNode(parseInt(treeArray[index]))
                    nextQueue.push(node.left)
                }
                index += 1;
                if(treeArray[index] !== "#") {
                    node.right = new TreeNode(parseInt(treeArray[index]))
                    nextQueue.push(node.right)
                }
                index++
            }
            queue = nextQueue;
        }

        return root;
    }
}
