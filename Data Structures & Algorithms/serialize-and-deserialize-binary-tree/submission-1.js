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
        if(!root) return '#'
        const serializedArray = [];
        let queue = [root];
        while(queue.length) {
            let nextQueue = []
            for(let i = 0; i < queue.length; i++) {
                const node = queue[i];
                if(!node) {
                    serializedArray.push("#")
                } else {
                    serializedArray.push(node.val)
                    nextQueue.push(node.left)
                    nextQueue.push(node.right)
                }
            }
            queue = nextQueue
        }

        return serializedArray.join(',')
    }

    /**
     * Decodes your encoded data to tree.
     *
     * @param {string} data
     * @return {TreeNode}
     */
    deserialize(data) {
        const treeStr = data.split(",")
        if(treeStr[0] === '#') return new TreeNode(null);

        const root = new TreeNode(parseInt(treeStr[0]))
        let queue = [root];
        let idx = 1;
        while(queue.length) {
            let nextQueue = [];
            for(let i = 0; i < queue.length; i++) {
                const node = queue[i]
                if(treeStr[idx] !== "#") {
                    node.left = new TreeNode(parseInt(treeStr[idx]))
                    nextQueue.push(node.left)
                }
                idx++;
                if(treeStr[idx] !== "#") {
                    node.right = new TreeNode(parseInt(treeStr[idx]))
                    nextQueue.push(node.right)
                }
                idx++;
            }
            queue = nextQueue
        }

        return root;
    }
}
