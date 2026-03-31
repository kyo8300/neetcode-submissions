class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const set = new Set(nums);
        const len = nums.length;

        const startNums = [];
        for(const num of set) {
            if(!set.has(num - 1)) {
                startNums.push(num)
            }
        }

        let maxCount = 0;

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

