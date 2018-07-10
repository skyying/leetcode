/**
 * @param {number[]} nums
 * @return {number}
 * 題目：harmonious 子序列是指array中的最大值跟最小值不會超過1, 給一個陣列，陣列數 <=20000
 * 求最長的能夠組成一個harmonious的子序列的長度是多少？
 * e.g. [1, 3, 2, 2, 5, 2, 3, 7], 子序列需回傳5, [2, 3, 2, 2, 3]
 * 解法：把值全部丟到hash內，針對每一個elment * 相加其在hash內的個數，逐一比較大小即可。時間複雜度是O(n);
 * 另一個解法則是全部排序過，但礙於最優的排序也可能要n(logn), 還是使用第一種解法會好些。
 */

var findLHS = function(nums) {
    if(!nums.length) {return 0};
    let hash = {},
        max = 0;

    let i = 0,
        len = nums.length,
        current;
    for (; i < len; i++) {
        current = nums[i];
        hash[current] = hash[current] ? hash[current] + 1 : 1;
    }
    let j = 0;
    for (; j < nums.length; j++) {
        current = nums[j];
        if (hash[current + 1]) {
            max = Math.max(max, hash[current + 1] + hash[current]);
        }
    }
    return max;
};

let arr1 = [1, 1, 1, 1 ]; // should return 0;
let arr2 = [1, 1, 1, 1, 2]; // should return 5;
console.log("findLHS [1, 1, 1, 1 ] is ", findLHS(arr1));
console.log("findLHS [1, 1, 1, 1, 2] is ", findLHS(arr2));

