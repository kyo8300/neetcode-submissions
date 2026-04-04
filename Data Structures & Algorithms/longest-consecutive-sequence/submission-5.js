class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const set = new Set();
        for(let i = 0; i < nums.length; i++) {
            set.add(nums[i], i);
        }

        const startNums = [];
        for(const num of nums) {
            if(!set.has(num - 1)) {
                startNums.push(num)
            }
        }

        let ans = 0;
        for(const startNum of startNums) {
            let count = 1;
            let num = startNum;
            while(set.has(num + 1)) {
                count++;
                num = num + 1;
            }

            ans = Math.max(ans, count)
        }

        return ans;
    }
}