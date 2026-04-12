class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const map = new Map();
        for(let i = 0; i < nums.length; i++) {
            map.set(nums[i], i);
        }

        const startNums = []
        for(const num of map.keys()) {
            if(!map.has(num - 1)) {
                startNums.push(num);
            }
        }

        let ans = 0;
        for(const startNum of startNums) {
            let num = startNum
            let count = 1;
            while(map.has(num + 1)) {
                num += 1;
                count++;
            }
            ans = Math.max(ans, count);
        }

        return ans;
    }
}
