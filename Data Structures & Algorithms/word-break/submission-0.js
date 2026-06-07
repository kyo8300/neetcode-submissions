class Solution {
    /**
     * @param {string} s
     * @param {string[]} wordDict
     * @return {boolean}
     */
    wordBreak(s, wordDict) {
        const memo = new Array(s.length).fill(-1);
        function dfs(idx) {
            if(idx >= s.length) return true;

            if(memo[idx] !== -1) {
                return memo[idx];
            }

            for(const word of wordDict) {
                const char = s.slice(idx, idx + word.length);
                if(char === word) {
                    if(dfs(idx + word.length)) {
                        memo[idx] = true;
                        return true;
                    }
                }
            }
            memo[idx] = false;
            return false
        }

        return dfs(0);
    }
}
