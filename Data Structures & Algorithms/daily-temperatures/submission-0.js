class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const result = new Array(temperatures.length).fill(0);
        const stack = [];
        for(let i = 0; i < temperatures.length; i++) {
            const num = temperatures[i];
            while(stack.length && stack[stack.length - 1][1] < num) {
                const [index, _] = stack.pop()
                result[index] = i - index;
            }

            stack.push([i, num]);
        }

        return result;
    }
}
