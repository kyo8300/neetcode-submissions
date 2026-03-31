class MyStack {
    constructor() {
        this.liveQueue = [];
        this.popedQueue = [];
    }

    /**
     * @param {number} x
     * @return {void}
     */
    push(x) {
        this.liveQueue.push(x);
    }

    /**
     * @return {number}
     */
    pop() {
        while(this.liveQueue.length > 1) {
            const val = this.liveQueue.shift();
            this.popedQueue.push(val)
        }
        const ans = this.liveQueue[this.liveQueue.length - 1]
        this.liveQueue = this.popedQueue;
        this.popedQueue = [];
        return ans
    }

    /**
     * @return {number}
     */
    top() {
        return this.liveQueue[this.liveQueue.length - 1];
    }

    /**
     * @return {boolean}
     */
    empty() {
        return this.liveQueue.length === 0;
    }
}

// push, pop, shift, length in js
// i can use two queues to implement stack.

// const stack = MyStack();
// stack.push(1);
// stack.push(2);
// stack.push(3);
// stack.top() //= 3
// stack.pop() //= 3
// stack.top() //= 2
// stack.empty() //= false

// First in, First out
// live queue [3]
// poped queue [1, 2]
