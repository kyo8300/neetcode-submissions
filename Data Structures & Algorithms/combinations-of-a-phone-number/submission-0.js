const digitMap = {
    "2": ['a', 'b', 'c'],
    "3": ['d', 'e', 'f'],
    "4": ['g', 'h', 'i'],
    "5": ['j', 'k', 'l'],
    "6": ['m', 'n', 'o'],
    "7": ['p', 'q', 'r', 's'],
    "8": ['t', 'u', 'v'],
    "9": ['w', 'x', 'y', 'z']

}
class Solution {
    /**
     * @param {string} digits
     * @return {string[]}
     */
    letterCombinations(digits) {
        if(!digits.length) return []
        const ans = [];
        function backtracking(char, idx) {
            if(char.length === digits.length) {
                ans.push(char);
                return;
            }

            const digit = digits[idx]
            for(const str of digitMap[digit]) {
                char += str;
                backtracking(char, idx + 1);
                char = char.slice(0, -1);
            }
        }
        backtracking("", 0)
        return ans;
    }
}
