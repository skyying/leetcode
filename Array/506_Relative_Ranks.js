/**
 * @param {number[]} nums
 * @return {string[]}
 * idea, 如果有要查詢，儘量想辦法用hash table來實作, 一開始先把每一個數字的index當成value, 
 * 數字自己是key, * 接着對數字做排序，再從最高查到最低，mapping到他們在原本數組的index，再給值。
 */
var findRelativeRanks = function(nums) {

    const sorted = nums.slice(0).sort((a, b) => b - a);
    const mapIndex = {};
    for (let i = 0; i < nums.length; i++) {
        mapIndex[nums[i]] = i;
    }

    sorted.map((n, i) => {
        if (i > 2) {
            nums[mapIndex[n]] = i + 1;
        } else if (i === 0) {
            nums[mapIndex[n]] = "Gold Medal";
        } else if (i === 1) {
            nums[mapIndex[n]] = "Silver Medal";
        } else if (i === 2) {
            nums[mapIndex[n]] = "Bronze Medal";
        }
    });

    return nums;
};

