class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = new Map();
        for(const num of nums) {
            map.set(num, (map.get(num) || 0)  + 1)
        }

        const ans = [];
        const countArray = Array.from({ length: nums.length + 1 }, () => []);
        for(const [num, count] of map) {
            countArray[count].push(num)
        }

        for(let i = countArray.length - 1; i >= 0; i--) {
                for(const num of countArray[i]) {
                    ans.push(num);
                }
                if(ans.length === k) break;

        }

        return ans;
    }
}

// 0 1 2 3 4 5 6
//   1 2 5 3    