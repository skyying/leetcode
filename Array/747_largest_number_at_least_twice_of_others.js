/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
  let max = -999999;
  let max_index = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > max) {
      max = nums[i];
      max_index = i;
    }
  }
  for (let i = 0; i < nums.length; i++) {
    if (max < nums[i] * 2 && i != max_index) {
      return -1;
    }
  }
  return max_index;
};
