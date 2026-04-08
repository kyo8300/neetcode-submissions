class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canJump(nums) {
        let goal = nums.length - 1;
        for(let i = nums.length - 2; i >= 0; i--) {
            if(i + nums[i] >= goal) {
                goal = i;
            }
        }

        return goal === 0;
    }
}

// [1, 2, 1, 0, 2]