class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        const memo = new Array(nums.length).fill(-1);
        function dfs(i) {
            if(i >= nums.length) {
                return 0;
            }

            if(memo[i] !== -1) {
                return memo[i]
            }

            let max = 0;
            for(let idx = i + 2; idx < nums.length; idx++) {
               max = Math.max(max, dfs(idx));
            }

            memo[i] = max + nums[i];
            return memo[i]
        }

        return Math.max(dfs(0), dfs(1));
    }
}
