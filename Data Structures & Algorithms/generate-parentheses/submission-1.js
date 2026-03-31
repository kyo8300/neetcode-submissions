class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
      const ans = []
      function backtracking(str, left, right){
        if(str.length === 2 * n){
          ans.push(str);
          return;
        }

        if(left < n) {
          str += "(";
          backtracking(str, left + 1, right);
          str = str.slice(0, -1);
        }

        if(right < left) {
          str += ")";
          backtracking(str, left, right + 1);
          str = str.slice(0, -1);
        }
      }

      backtracking("", 0, 0)
      return ans;
    }
}
