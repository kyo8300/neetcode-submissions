class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s) {
        let ans = '';
        for(let i = 0; i < s.length; i++) {
            let l = i;
            let r = i;
            while(0 <= l && r < s.length && s[l] === s[r]) {
                if(r - l + 1 > ans.length) {
                    ans = s.slice(l, r + 1);
                }
                l--;
                r++;
            }
        }

        for(let i = 0; i < s.length; i++) {
            let l = i;
            let r = i + 1;
            while(0 <= l && r < s.length && s[l] === s[r]) {
                if(r - l + 1 > ans.length) {
                    ans = s.slice(l, r + 1);
                }
                l--;
                r++;
            }
        }

        return ans;
    }
}
