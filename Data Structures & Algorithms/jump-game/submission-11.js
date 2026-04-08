class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canJump(nums) {
        const memo = new Array(nums.length).fill(-1);
        memo[nums.length - 1] = true;
        for(let i = nums.length - 2; i >= 0; i--) {
            for(let j = 1; j <= Math.min(nums.length,nums[i]); j++) {
                if(memo[j + i] === true) {
                    memo[i] = true;
                    break;
                }
            }
        }

        return memo[0] === true
    }
}

// [3, 2, 5, 3, 2]