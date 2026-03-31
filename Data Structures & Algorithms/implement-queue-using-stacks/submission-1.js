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
        this.stack.push(x);
    }

    /**
     * @return {number}
     */
    pop() {
        if(this.temp.length === 0) {
            while(this.stack.length) {
                this.temp.push(this.stack.pop())
            }
        }

        return this.temp.pop()
    }

    /**
     * @return {number}
     */
    peek() {
        if(this.temp.length === 0) {
            while(this.stack.length) {
                this.temp.push(this.stack.pop())
            }
        }

        return this.temp[this.temp.length - 1]
    }

    /**
     * @return {boolean}
     */
    empty() {
        return this.stack.length === 0 && this.temp.length === 0
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

// []
// [3, 2, 1]
