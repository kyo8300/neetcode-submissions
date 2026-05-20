class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s) {
        if(s.length === 1) return s;
        let resIdx = 0;
        let resLen = 0;

        for(let i = 0; i < s.length; i++) {
            let l = i;
            let r = i;
            while(l >= 0 && r < s.length && s[l] === s[r]) {
                if(resLen < r - l + 1) {
                    resLen = r - l + 1;
                    resIdx = l;
                }
                l--;
                r++
            }

            l = i;
            r = i + 1;
            while(l >= 0 && r < s.length && s[l] === s[r]) {
                if(resLen < r - l + 1) {
                    resLen = r - l + 1;
                    resIdx = l;
                }
                l--;
                r++
            }
        }

        return s.slice(resIdx, resLen + resIdx);

    }
}



