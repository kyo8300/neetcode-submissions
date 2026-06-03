class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        if(nums.length === 1) return nums[0];
        
        function rob(houses) {
            if(houses.length === 1) return houses[0];
            let one = houses[0];
            let two = Math.max(houses[0], houses[1]);
            for(let i = 2; i < houses.length; i++) {
                let temp = two;
                two = Math.max(one + houses[i], two);
                one = temp
            }

            return two
        }

        return Math.max(rob(nums.slice(0, -1)), rob(nums.slice(1)))

    }
}
