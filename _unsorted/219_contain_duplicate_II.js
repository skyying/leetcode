/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    let set = new Set();
    for (let i = 0; i < nums.length; i++) {
        if (set.has(nums[i])) {
            return true;
        }
        if (set.has(nums[i - k])) {
            set.delete(nums[i - k])
        }
        set.add(nums[i])
    }
    return false;
}


