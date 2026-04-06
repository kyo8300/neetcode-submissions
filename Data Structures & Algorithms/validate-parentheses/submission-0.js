const BRACKET_MAP = {
    ')': '(',
    ']': '[',
    '}': '{',
}

class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [];
        for(const bracket of s) {
            if(bracket === ')' || bracket === '}' || bracket === ']') {
                if(!stack.length) return false;
                const val = stack.pop();
                if(val !== BRACKET_MAP[bracket]) {
                    return false;
                }
            } else {
                stack.push(bracket)
            }
        }

        return stack.length === 0;
    }
}
