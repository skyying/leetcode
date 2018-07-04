/**
 * @param {number[]} nums
 * @return {number}
 * 題目: 度數是整個array出現最多次的元素的個數，[1, 1, 2]，則度數是2,
 * 讓最小的sub array的長度，這個sub array的度與array相同。 
 * 解法: 先loop一次, 累計每個element出現的頻率, 同時記得這個element第一次出現的index,
 * 並且持續update最後出現的index, 當這個loop結束, 可以得到出現最多次的頻率是多少, 只要再用
 * 一次循環來找到符合這個頻率的最小數組是多少即可，這個最小數組其實就是符合最大頻率的數字最
 * 後出現的位置減掉第一次出現的位置, 記得再加上1就是長度了。
 * 時間複雜度是o(n)
 */
var findShortestSubArray = function(nums) {
    let e = {},
        degree = 0,
        len = Number.MAX_VALUE;

    for (let i = 0; i < nums.length; i++) {
        if (!e[nums[i]]) {
            e[nums[i]] = {
                freq: 1,
                first: i,
                last: i,
            };
        } else {
            e[nums[i]].freq++;
            e[nums[i]].last = i;
        }
        degree = Math.max(degree, e[nums[i]].freq);
    }

    for (var key in e) {
        if (e[key].freq === degree) {
            let diff = e[key].last - e[key].first + 1;
            len = diff < len ? diff : len;
        }
    }
    return len;
};

let a = [1, 2, 2, 3, 4, 2, 3, 1];
console.log(findShortestSubArray(a));
