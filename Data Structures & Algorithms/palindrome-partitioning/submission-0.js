class Solution {
    /**
     * @param {string} s
     * @return {string[][]}
     */
    partition(s) {
        function isPalindrome(str) {
            let l = 0;
            let r = str.length - 1;
            while(l < r) {
                if(str[l] !== str[r]) {
                    return false;
                }
                l++;
                r--;
            }
            return true;
        }

        const ans = [];
        const path = [];
        function backtracking(idx) {
            if(idx === s.length) {
                ans.push([...path]);
                return;
            }
            for(let i = idx; i < s.length; i++) {
                const str = s.slice(idx, i + 1);
                if(isPalindrome(str)) {
                    path.push(str)
                    backtracking(i + 1);
                    path.pop();
                }
            }
        }

        backtracking(0)
        return ans;
    }
}