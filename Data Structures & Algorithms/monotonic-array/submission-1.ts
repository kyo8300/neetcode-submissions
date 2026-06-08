class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    isMonotonic(nums: number[]): boolean {
           if(nums.length === 1) return true;

    let status: 'equal' | 'increasing' | 'decreasing' = 'equal';
    if(nums[0] > nums[1]) {
        status = 'decreasing'
    } else if(nums[0] < nums[1]) {
        status = 'increasing'
    }

    for(let i = 1; i < nums.length; i++) {
        if(status === 'increasing') {
            if(nums[i - 1] > nums[i]) return false;
        } else if(status === 'decreasing') {
            if(nums[i - 1] < nums[i]) return false;
        } else {
                if(nums[i - 1] > nums[i]) {
                    status = 'decreasing'
                } else if(nums[i - 1] < nums[i]) {
                    status = 'increasing'
                }
        }
    }

    return true;
    }
}
