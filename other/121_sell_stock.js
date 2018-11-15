/**
 * @param {number[]} prices
 * @return {number}
 * idea: 沿途找最小的數字，如果目前的數字不是最小的數字，而且再目前已經知道的最小數字的後面，
 * 那就拿他們之間的差跟已經知道最大的利潤相比，如果有比目前利潤大，就更新最大的利潤。
 * 真正的差別在，每一個迴圈中，如果目前這個數字是最小的，那就不做利潤的比較與跟新，
 * 因爲以這個最小值，任何在此之前計算出來的利潤，都一定會比與目前這個最小值計算出來的大。
 */

var maxProfit = function(prices) {
  let min = Number.MAX_SAFE_INTEGER;
  let profit = 0;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < min) {
      min = prices[i];
    } else if (prices[i] - min > profit) {
      profit = prices[i] - min;
    }
  }

  return profit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
