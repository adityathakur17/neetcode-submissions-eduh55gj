class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        min_inp = float('inf')
        max_profit = 0

        for i in range(len(prices)):
            if prices[i]<min_inp:
                min_inp = prices[i]
            if prices[i] - min_inp > max_profit:
                max_profit = prices[i] - min_inp
        return max_profit
        