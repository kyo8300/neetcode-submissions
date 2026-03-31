class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canJump(nums) {
        const n = nums.length;
        const memo = new Array(n).fill(false);
        memo[n - 1] = true;
        for(let i = nums.length - 2; i >= 0; i--) {
            for(let j = 1; j <= Math.min(n, nums[i]); j++) {
                if(memo[i + j]) {
                    memo[i] = true;
                    break;
                }
            }
        }

        return memo[0]
    }
}

// nums.length === 1 return true;

// [1, 2, 0, 1, 0]

// i + num[i] >= last index true;


// [0, 2, 3]
//  0. 1. 2.
//  0. 3. 

// i + num[i] < last index false
 