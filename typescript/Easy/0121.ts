export function maxProfit(prices: number[]): number {
  let maxProfit = 0
  let minPriceBuy = prices[0]
  for (let i = 1; i < prices.length; i++) {
    let price = prices[i]
    if (price < minPriceBuy) {
      minPriceBuy = price
    } else if (price - minPriceBuy > maxProfit) {
      maxProfit = price - minPriceBuy
    }
  }
  return maxProfit
}
