class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canJump(nums) {
        let max = 0;
        for(let i = 0; i < nums.length - 1; i++) {
            if(i > max) return false
            max = Math.max(max, i + nums[i]);
        }

        return max >= nums.length - 1;
    }
}

// nums.length === 1 return true;

// [1, 2, 0, 1, 0]

// i + num[i] >= last index true;


// [0, 2, 3]
//  0. 1. 2.
//  0. 3. 

// i + num[i] < last index false
 