class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canJump(nums) {
        if(nums.length === 1) return true;

        let left = 0;
        let right = 0;
        while(left < nums.length && left <= right) {
            let max = 0;
            for(let i = left; i <= right; i++) {
                if(nums[i] + i >= nums.length - 1) {
                    return true;
                }
                max = Math.max(nums[i] + i, max);
            }
            left = right + 1;
            right = max;
        }

        return false;
    }
}
