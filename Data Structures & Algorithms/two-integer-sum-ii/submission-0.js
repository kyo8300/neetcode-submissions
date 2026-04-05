class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let left = 0;
        let right = numbers.length - 1;
        while(left < right) {
            let sum = numbers[left] + numbers[right];
            if(sum === target) {
                return [left + 1, right + 1];
            } else if(sum > target) {
                right--;
            } else {
                left++;
            }
        }
    }
}

// [1, 2, 3, 3, 4, 8] target = 10
    // l              r