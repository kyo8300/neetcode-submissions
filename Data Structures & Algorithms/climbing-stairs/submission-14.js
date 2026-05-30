class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        let two = 1;
        let one = 1;

        for(let i = n - 2; i >= 0; i--) {
            let tmp = two;
            two = one;
            one = one + tmp;
        }

        return one;
    }
}
