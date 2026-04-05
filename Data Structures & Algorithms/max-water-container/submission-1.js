class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let left = 0;
        let right = heights.length - 1;
        let maxAmount = 0;
        while(left < right) {
            const width = right - left;
            const height = Math.min(heights[left], heights[right]);
            maxAmount = Math.max(maxAmount, width * height);

            if(heights[left] > heights[right]) {
                right--;
            } else {
                left++;
            }
        }

        return maxAmount;
    }
}

