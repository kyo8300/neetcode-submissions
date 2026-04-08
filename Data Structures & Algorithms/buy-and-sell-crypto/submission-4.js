class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let min = 101;
        let max = -1;
        let profit = -1;
        for(const price of prices) {
            if(price < min) {
                min = Math.min(price, min);
                continue;
            }

            profit = Math.max(profit, price - min)
        }

        return Math.max(0, profit);
    }
}
