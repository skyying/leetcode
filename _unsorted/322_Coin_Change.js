/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {

    if(amount < 1) return 0;
    let table = [];
    table[0] = 0;

    for(let i = 1;  i <= amount ; i++){
        table[i] = amount + 1;
        for(let j = 0; j < coins.length; j++){
            if(coins[j] <= i) { 
                table[i] = Math.min(table[i], table[i-coins[j]] + 1)
            }
        } 
    }
    return table[amount] !== amount+1 ?  table[amount] : -1;
};


console.log(coinChange([1, 2, 4], 8));
