class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        if(tokens.length === 1) return Number(tokens[0]);

        const stack = [];
        let res = 0;

        for(const token of tokens) {
             if(token === '+') {
                const operand1 = stack.pop();
                const operand2 = stack.pop();
                res = operand1 + operand2
                stack.push(res)
            } else if(token === '-') {
                const operand2 = stack.pop();
                const operand1 = stack.pop();
                res = operand1 - operand2
                stack.push(res)
            } else if(token === '*') {
                const operand2 = stack.pop();
                const operand1 = stack.pop();
                res = operand1 * operand2
                stack.push(res)
            } else if(token === '/') {
                const operand2 = stack.pop();
                const operand1 = stack.pop();
                res = Math.trunc(operand1 / operand2)
                stack.push(res)
            } else {
                stack.push(Number(token))
            }
        }

        return res;
    }
}
