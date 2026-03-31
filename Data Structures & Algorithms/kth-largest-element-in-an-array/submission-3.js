class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums, k) {
        k = nums.length - k;

        function quickSelect(left, right) {
            let pivot = nums[right];
            let p = left;

            for(let i = left; i < right; i++) {
                if(nums[i] <= pivot) {
                    [nums[p], nums[i]] = [nums[i], nums[p]];
                    p++;
                }
            }
           [nums[p], nums[right]] = [nums[right], nums[p]];

           if(p === k) {
             return nums[k]
           } else if (p < k) {
             return quickSelect(p + 1, right);
           } else {
             return quickSelect(left, p - 1);
           }
        }

        return quickSelect(0, nums.length - 1);
    }
}
