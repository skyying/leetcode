/**
 * @param {number[]} nums
 * @return {number}
 */
// 題目是要找出一個都是0, 和1的array中，連續相連1的最長長度是多少？
// Idea: 逐一檢查, 如果是1, 就增加count, 如果是0, 就總結sum和max然後比較。
var findMaxConsecutiveOnes = function(nums) {
    let max = sum = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            sum++;
        } else {
            max = sum > max ? sum : max;
            sum = 0;
        }
    }
    return sum > max ? sum : max;
};

console.log(findMaxConsecutiveOnes([0, 0])===0);
console.log(findMaxConsecutiveOnes([1, 1, 1, 1, 0, 0]) === 4);
console.log(findMaxConsecutiveOnes([0, 0, 1, 1, 1, 1]) === 4);
console.log(findMaxConsecutiveOnes([1]) === 1);
console.log(findMaxConsecutiveOnes([0]) === 0);
