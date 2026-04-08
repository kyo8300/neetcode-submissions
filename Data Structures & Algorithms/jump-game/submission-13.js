class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canJump(nums) {
        let max = 0
        for(let i = 0; i < nums.length; i++) {
            if(i > max) return false
            max = Math.max(max, i + nums[i]);
        }

        return true;
    }
}

// [1, 2, 1, 0, 2]