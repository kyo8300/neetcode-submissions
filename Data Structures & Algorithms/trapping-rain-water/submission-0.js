class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let left = 0;
        let right = height.length - 1;
        let leftMaxHeight = height[left];
        let rightMaxHeight = height[right];
        let maxArea = 0;
        while(left < right) {
            if(leftMaxHeight < rightMaxHeight) {
                left++;
                maxArea += Math.max(0, leftMaxHeight - height[left])
                leftMaxHeight = Math.max(leftMaxHeight, height[left])
            } else {
                right--;
                maxArea += Math.max(0, rightMaxHeight - height[right])
                rightMaxHeight = Math.max(rightMaxHeight, height[right])
            }
        }

        return maxArea;
    }
}

