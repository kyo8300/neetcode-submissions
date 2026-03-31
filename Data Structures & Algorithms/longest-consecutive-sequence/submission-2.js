class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const set = new Set();
        const len = nums.length;
        for(let i = 0; i < len; i++) {
            set.add(nums[i]);
        }

        const startNums = [];
        for(let i = 0; i < len; i++) {
            if(!set.has(nums[i] - 1)) {
                startNums.push(nums[i])
            }
        }

        let maxCount = 0;

        console.log(set)
        for(const startNum of startNums) {
            let consecutiveNum = startNum;
            let count = 1;
            while(set.has(consecutiveNum + 1)) {
                consecutiveNum += 1;
                count += 1;
            }

            maxCount = Math.max(maxCount, count)
        }


        return maxCount
    }
}

