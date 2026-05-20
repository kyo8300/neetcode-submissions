class Solution {
    checkPalindrome(s, l, r) {
        let left = l;
        let right = r;
        while(left <= right) {
            if(s[left] !== s[right]) {
                return false;
            }
            left++;
            right--;
        }

        return true;
    }
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s) {
        if(s.length === 1) return s;
        let resIdx = 0;
        let resLen = 0;

        const dp = Array.from({length: s.length}, () => new Array(s.length).fill(false));
    
        for(let i = s.length - 1; i >= 0; i--) {
            for(let j = i; j < s.length; j++) {
                if(s[i] === s[j] && (j - i <= 2 || dp[i + 1][j - 1])) {
                    dp[i][j] = true;
                    if(resLen < j - i + 1) {
                        resLen = j - i + 1;
                        resIdx = i;
                    }
                }
            }
        }
        return s.slice(resIdx, resIdx + resLen);
    }
}



