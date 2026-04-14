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
        for(const num of new Set(nums)) {
            const index = map.get(num)
            countArray[index].push(num)
        }

        console.log(countArray)

        for(let i = countArray.length - 1; i >= 0; i--) {
            if(countArray[i].length) {
                for(const num of countArray[i]) {
                    ans.push(num);
                    k--;
                }

                if(k === 0) break;
            }
        }

        return ans;
    }
}

// 0 1 2 3 4 5 6
//   1 2 5 3    