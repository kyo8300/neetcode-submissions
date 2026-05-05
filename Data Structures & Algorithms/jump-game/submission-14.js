class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canJump(nums) {
        if(nums.length < 2) return true
        let goalIdx = nums.length - 1;
        for(let i = nums.length - 2; i >= 0; i--) {
            if(nums[i] + i >= goalIdx) {
                goalIdx = i;
            }
        }

        return goalIdx === 0;
    }
}
