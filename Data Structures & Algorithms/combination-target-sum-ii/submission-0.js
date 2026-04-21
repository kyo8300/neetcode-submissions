class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates, target) {
        let ans = [];
        let path = [];
        candidates.sort((a,b) => a - b)
        function backtracking(curr, idx) {
            if(curr < 0) {
                return;
            }
            if(curr === 0) {
                ans.push([...path])
                return;
            }

            for(let i = idx; i < candidates.length; i++) {
                if(i > idx && candidates[i] === candidates[i - 1]) continue
                path.push(candidates[i]);
                backtracking(curr - candidates[i], i + 1);
                path.pop();
            }
        }

        backtracking(target, 0)
        return ans;
    }
}
