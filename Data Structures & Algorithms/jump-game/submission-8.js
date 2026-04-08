class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canJump(nums) {
        const memo = new Array(nums.length).fill(-1);
        function dfs(i) {
            if(memo[i] !== -1) {
                return memo[i]
            }

            if(i >= nums.length - 1) {
                return true
            }

            for(let j = 1; j <= nums[i]; j++) {
                if(dfs(j + i)) {
                    memo[j + i] = true;
                    return true;
                }
            }

            memo[i] = false
            return false;
        }

        return dfs(0)
    }
}

// [3, 2, 5, 1, 2]