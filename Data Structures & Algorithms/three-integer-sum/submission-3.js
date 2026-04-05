class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a, b) => a - b);
        
        const ans = [];
        for(let i = 0; i < nums.length - 2; i++) {
            let pivot = nums[i];
            let left = i + 1;
            let right = nums.length - 1;

            if(pivot > 0) break;
            if(i > 0 && nums[i] === nums[i - 1]) continue;

            while(left < right) {
                const threeSum = pivot + nums[left] + nums[right]
                if(threeSum === 0) {
                    ans.push([pivot, nums[left], nums[right]]);
                    left++;
                    right--;
                    while(left < right && nums[left] === nums[left - 1]) {
                        left++;
                    }
                    while(left < right && nums[right] === nums[right + 1]) {
                        right--;
                    }
                } else if(threeSum > 0) {
                    right--;
                } else {
                    left++;
                }
            }
        }


        return ans;
    }
}

// nums = [-1,0,1,2,-1,-4]

// [-4, -1, -1, 0, 1, 2]
//              p. l. r

// [-1, -1, 2]