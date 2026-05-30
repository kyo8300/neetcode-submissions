class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    countSubstrings(s) {
        function calcPalindrome(left, right, str) {
            let res = 0;
            let l = left;
            let r = right;
            while(0 <= l && r < str.length && str[l] === str[r]) {
                res += 1;
                l--;
                r++;
            }

            return res;
        }

        let ans = 0;
        for(let i = 0; i < s.length; i++) {
            ans += calcPalindrome(i, i, s)
            ans += calcPalindrome(i, i + 1, s);
        }
        return ans;
    }
}
