/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
    var start = 0,
        end = 0,
        diff = Number.MAX_VALUE,
        bestSum = 0;

    nums = nums.sort((a, b) => a - b);
  
    for (var i = 0; i < nums.length - 1; i++) {

        if (i === 0 || nums[i] > nums[i - 1]) {
            start = i + 1;
            end = nums.length - 1;
            while (start < end) {
                var sum = nums[i] + nums[start] + nums[end];
                if (sum === target) {
                    return sum;
                } else if (Math.abs(sum - target) < diff) {
                    diff = Math.abs(sum - target);
                    bestSum = sum;
                } else if (sum < target) {
                    start++;
                } else {
                    end--;
                }
            }
        }
    }
    return bestSum;
};

console.log(threeSumClosest([-5, -5, -5, -5, -1, -1], -11)===-11);
console.log(threeSumClosest([-5, -5, -3, -3, -1, -1], -4) === -5);
console.log(threeSumClosest([1, 1, 2, 3, 4, 5], 2) === 4);