class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxProduct(nums) {
        let max = -Infinity;
        let product = 1;
        for(let i = 0; i < nums.length; i++) {
            const num = nums[i]
            if(num === 0) {
                product = 1;
                max = Math.max(max, 0); 
                continue;
            }
            product *= num;
            max = Math.max(max, product);
        }

        product = 1;
        for(let i = nums.length - 1; i >= 0; i--) {
            const num = nums[i]
            if(num === 0) {
                product = 1;
                max = Math.max(max, 0); 
                continue;
            }
            product *= num;
            max = Math.max(max, product);
        }

        return max;
    }
}

// let max = 10
// [2, -3, 0, 10, -6]


