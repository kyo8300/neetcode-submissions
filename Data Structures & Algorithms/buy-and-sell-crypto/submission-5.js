class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let min = 101;
        let profit = 0;
        for(const price of prices) {
            if(price < min) {
                min = Math.min(price, min);
                continue;
            }

            profit = Math.max(profit, price - min)
        }

        return profit;
    }
}
