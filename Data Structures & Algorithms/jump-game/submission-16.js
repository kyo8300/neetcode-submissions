class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canJump(nums) {
        const dp = new Array(nums.length).fill(false);
        dp[nums.length - 1] = true;
        for(let i = nums.length - 2; i >= 0; i--) {
            for(let j = i + 1; j <= Math.min(nums.length - 1, nums[i] + i); j++) {
                if(dp[j]) {
                    dp[i] = true;
                    break;
                }
            }
        }

        return dp[0]
    }
}
