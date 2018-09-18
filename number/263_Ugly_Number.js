/**
 * @param {number} num
 * @return {boolean}
 * @題目: 如果這個數的因數是由2, 3, 5這三個質數任意n個組成，則回傳true, 否則回傳false,
 * e.g. 8 = 2 * 2 * 2, 需回傳true, -8則否，因爲是-2*2*2;
 * @解法: 主要思路在檢查num是否有除了2, 3, 5以外的因數，如果num 可以被2, 3, 5整除，則
 * reset num 爲整除後的值，等於是用長除法，檢查最後的結果，如果是1, 則代表該數的factor
 * 確實只有2  3, 5 幾個數字中的任意幾個。
 */
var isUgly = function(num) {
    if (num < 7) {
        return num > 0;
    }
    let primes = [2, 3, 5],
        i = 0;

    while (num > 1) {
        if (num % primes[i] === 0) {
            num = num / primes[i];
        } else {
            i += 1;
        }
        if (!primes[i] && i > 2) {
            return false;
        }
    }
    return true;
};


var isUgly = function(num) {
    while (num % 2 === 0) {
        num /= 2;
    }
    while (num % 3 === 0) {
        num /= 3;
    }
    while (num % 5 === 0) {
        num /= 5;
    }
    return num === 1;
};
