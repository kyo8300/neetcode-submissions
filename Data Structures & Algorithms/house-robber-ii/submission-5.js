class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        if(nums.length === 1) return nums[0];
        
        function rob(houses) {
            let one = 0;
            let two = 0;
            for(const house of houses) {
                let temp = Math.max(house + one, two)
                one = two
                two = temp;
            }

            return two
        }

        return Math.max(rob(nums.slice(0, -1)), rob(nums.slice(1)))

    }
}
