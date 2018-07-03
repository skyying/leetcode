/**
 * @param {string} s
 * @return {number}
 */

// 解法，因爲只需要長度，而需要組成迴文一定需要偶位數的相同字母，頂多加一個奇數的子母。
// 所以只需要對每個字母做個數統計，加總所有偶位數的字母，奇位數的子母則是減1再加。
// 最後如果存在至少一位的奇位數字母，則於Return的總數再加1。
var longestPalindrome = function(s) {
    let STable = {};
    for (let i = 0; i < s.length; i++) {
        STable[s[i]] = STable[s[i]] > 0 ? STable[s[i]] + 1 : 1;
    }
    let sum = 0,
        existingCenter = 0;
    let sKeys = Object.keys(STable);
    for (let i = 0; i < sKeys.length; i++) {
        let count = STable[sKeys[i]];
        if (count % 2 !== 0) {
            existingCenter = 1;
            sum += count - 1;
        } else {
            sum += count;
        }
    }
    return sum + existingCenter;
};

console.log(longestPalindrome("AbbAccdeee"));
