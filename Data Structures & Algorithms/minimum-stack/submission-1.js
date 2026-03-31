class MinStack {
    constructor() {
        this.stack = [];
        this.minStack = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val);
        if(this.minStack.length === 0 || this.minStack[this.minStack.length - 1] >= val) {
            this.minStack.push(val)
        }
    }

    /**
     * @return {void}
     */
    pop() {
        const val = this.stack.pop();
        if(this.minStack[this.minStack.length - 1] === val) {
            this.minStack.pop()
        }
    }

    /**
     * @return {number}
     */
    top() {
       return this.stack[this.stack.length - 1];
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.minStack[this.minStack.length - 1];
    }
}

// [-2, -2, -3]

// minStack = [-2, -3]

// const minStack = new MinStack();
// minStack.push(-2)
// minStack.push(-2)
// minStack.push(-3)
// minStack.getMin() // -3
// minStack.pop()
// minStack.getMin() // -2




