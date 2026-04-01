class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxProduct(nums) {
        let ans = -Infinity;
        let max = 1
        let min = 1
        for(const num of nums) {
            if(num === 0) {
                ans = Math.max(0, ans)
                max = 1;
                min = 1;
                continue;
            }
            let temp = max * num;
            max = Math.max(min * num, max * num, num);
            min = Math.min(num, min * num, temp);
            ans = Math.max(ans, max)
        }

        return ans
    }
}

