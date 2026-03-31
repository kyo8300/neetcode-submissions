class MyStack {
    constructor() {
        this.q1 = [];
        this.q2 = [];
    }

    /**
     * @param {number} x
     * @return {void}
     */
    push(x) {
        this.q1.push(x);
    }

    /**
     * @return {number}
     */
    pop() {
        while(this.q1.length > 1) {
            const val = this.q1.shift();
            this.q2.push(val)
        }
        const lastVal = this.q1.shift();
        while(this.q2.length) {
            const val = this.q2.shift();
            this.q1.push(val)
        }
        return lastVal;
    }

    /**
     * @return {number}
     */
    top() {
        while(this.q1.length > 1) {
            const val = this.q1.shift();
            this.q2.push(val)
        }
        const lastVal = this.q1.shift();
        this.q2.push(lastVal)
        while(this.q2.length) {
            const val = this.q2.shift();
            this.q1.push(val)
        }
        return lastVal;
    }

    /**
     * @return {boolean}
     */
    empty() {
        return this.q1.length === 0;
    }
}

q1 = [1, 2]
q2 = []

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
