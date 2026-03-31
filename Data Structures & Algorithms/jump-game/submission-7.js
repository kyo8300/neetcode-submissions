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
        
        return goal === 0
    }
}

// nums.length === 1 return true;

// [1, 2, 0, 1, 0]

// i + num[i] >= last index true;


// [0, 2, 3]
//  0. 1. 2.
//  0. 3. 

// i + num[i] < last index false
 