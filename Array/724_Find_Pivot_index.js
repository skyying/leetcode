/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
  if (nums.length < 3) return -1;

  let left = 0;
  let right = nums.slice(1).reduce((sum, x) => sum + x, 0);

  for (let i = 0; i < nums.length; i++) {
    if (left === right) { return i; }

    left += nums[i];

    if (i < nums.length - 1) {
      right -= nums[i + 1];
    }
  }
  return -1;
};
