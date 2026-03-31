class Node {
    constructor(val = null, key = null, prev = null, next = null) {
        this.val = val;
        this.key = key;
        this.prev = prev;
        this.next = next;
    }
}
class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.map = new Map();
        this.leftNode = new Node();
        this.rightNode = new Node();
        this.size = capacity;
        this.leftNode.next = this.rightNode;
        this.rightNode.prev = this.leftNode;
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if(!this.map.has(key)) {
            return -1;
        }

        const val = this.map.get(key).val
        this.removeNode(key);
        this.addNode(key, val);
        return val;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        if(this.map.has(key)) {
            this.removeNode(key);
            this.addNode(key,value)
        } else {
            this.addNode(key,value)
        }

        if(this.map.size > this.size) {
            this.removeNode(this.leftNode.next.key);
        }
    }

    addNode(key, value) {
        const node = new Node(value, key);
        const prev = this.rightNode.prev;
        prev.next = node;
        this.rightNode.prev = node;
        node.next = this.rightNode;
        node.prev = prev;
        this.map.set(key, node);
    }

    removeNode(key) {
        const cur = this.map.get(key);
        const next = cur.next;
        const prev = cur.prev;
        next.prev = prev;
        prev.next = next;
        this.map.delete(key);
    }
}
