/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {

    var sum = nums[0],
        max = sum;
    for (var i = 1; i < nums.length; i++) {

        sum = Math.max(sum + nums[i], nums[i]); 
        max = Math.max(sum, max);

    }
    return max;

};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])===6);
console.log(maxSubArray([1])===1);
