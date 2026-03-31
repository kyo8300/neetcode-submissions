class MyQueue {
    constructor() {
        this.stack = [];
        this.temp = []
    }

    /**
     * @param {number} x
     * @return {void}
     */
    push(x) {
        while(this.stack.length) {
            this.temp.push(this.stack.pop());
        }

        this.stack.push(x);

        while(this.temp.length) {
            this.stack.push(this.temp.pop());
        }
    }

    /**
     * @return {number}
     */
    pop() {
        return this.stack.pop();
    }

    /**
     * @return {number}
     */
    peek() {
        return this.stack[this.stack.length - 1];
    }

    /**
     * @return {boolean}
     */
    empty() {
        return this.stack.length === 0
    }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */

// [1, 2]
// []
