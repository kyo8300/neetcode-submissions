class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
      function backtracking(str, opening, closing) {
        if(str.length === 2 * n) {
          ans.push(str);
          return;
        }

        if(opening < n) {
          backtracking(str + "(", opening + 1, closing)
        }

        if(opening > closing) {
          backtracking(str + ")", opening, closing + 1)
        }
      }

      let ans = []
      backtracking("", 0, 0);
      return ans;
    }
}

// n = 3
// ["()()()", "(()())", "((()))", "(())()", "()(())"]

// base case 
// length =  2n -> push to return array

// i can put "(" if ooen <= n
// i can put ")" if open >= closing



// O(2 ^ 2n)
// O(2n - 1)