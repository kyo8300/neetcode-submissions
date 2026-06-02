class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s) {
        let resIdx = 0;
        let resLen = 0
        function checkPalindrome(isEven = false) {
            for(let i = 0; i < s.length; i++) {
                let l = i;
                let r = isEven ? i : i + 1;
                while(0 <= l && r < s.length && s[l] === s[r]) {
                    if(r - l + 1 > resLen) {
                        resLen = r - l + 1;
                        resIdx = l;
                    }
                    l--;
                    r++;
                }
            }
        }

        checkPalindrome()
        checkPalindrome(true)

        return s.slice(resIdx, resIdx + resLen);
    }
}
