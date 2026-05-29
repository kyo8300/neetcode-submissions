class Solution {
    /**
     * @param {string} s
     * @return {string[][]}
     */
    partition(s) {
        function isPalin(str) {
            let l = 0;
            let r = str.length - 1;
            while(l <= r) {
                if(str[l] !== str[r]) return false;
                l++;
                r--;
            }

            return true;
        }
        const ans = [];
        const pathArr = [];
        function backtracking(idx) {
            if(idx === s.length) {
                ans.push([...pathArr]);
                return;
            }

            for(let i = idx; i < s.length; i++) {
                const char = s.slice(idx, i + 1);
                if(isPalin(char)) {
                    pathArr.push(char);
                    backtracking(i + 1);
                    pathArr.pop(char)
                }

            }
        }
        backtracking(0)
        return ans;
    }
}
