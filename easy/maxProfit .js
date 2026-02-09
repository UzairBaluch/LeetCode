var maxProfit = function (prices) {
  if (prices.length <= 1) {
    return 0;
  }

  let minPrice = prices[0];
  let maxProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    minPrice = Math.min(minPrice, prices[i]);

    let todaysProfit = prices[i] - minPrice;

    maxProfit = Math.max(maxProfit, todaysProfit);
  }

  return maxProfit;
};
