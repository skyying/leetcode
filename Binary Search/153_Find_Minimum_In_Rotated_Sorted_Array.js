/**
 * @param {number[]} nums
 * @return {number}
 * idea: 雖然可以透過liner search來找出最小的，不過還是可以用binary search來找出最小的值。主要的挑戰在怎麼決定往兩邊的那邊找，這裏我想到的方法是，比較mid, low, high, 三個值最小，如果是high位置的值比low, mid小，那麼表示最小的值一定在mid + 1 ~ high這個範圍，此時重設low的值即可。
 */
var findMin = function(nums) {

    if (nums.length < 3) {
        return Math.min(nums[0], nums[nums.length - 1]);
    };

    let n = nums.length - 1,
        high = n,
        low = 0,
        mid, i;

    while (high >= low) {

        mid = low + Math.floor((high - low) / 2);
        i = mid === 0 ? 1 : -1;
        let isEdgeminimal = (mid === 0 || mid === n) && Math.min(nums[mid + i], nums[n], nums[0]) === nums[mid];

        if ((nums[mid - 1] > nums[mid] && nums[mid + 1] > nums[mid]) || isEdgeminimal) {
            return nums[mid];
        } else if (Math.min(nums[mid], nums[high], nums[low]) == nums[high]) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
};

console.log(findMin([1, 2, 3, 4, 5]) === 1);
console.log(findMin([0, 2, 3, 4, -4]) === -4);
console.log(findMin([4, 5, 6, 7, 0, 1, 2]) === 0);
console.log(findMin([5, 1, 2, 3, 4]) === 1);
