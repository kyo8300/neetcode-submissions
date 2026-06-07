class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canJump(nums) {
        if(nums.length === 1) return true;

        let p = nums.length - 1;
        for(let i = nums.length - 2; i >= 0; i--) {
            if(nums[i] + i >= p) {
                p = i;
            }
        }

        return p === 0;
    }
}
