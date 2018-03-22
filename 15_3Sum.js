/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {

    if (nums.length < 3) return [];
    nums = nums.sort((a, b) => a - b); //sorting array in increasing order;
    var result = [];

    for (var i = 0; i < nums.length - 2; i++) {

        if (i === 0 || nums[i] > nums[i - 1]) { 

            var start = i + 1,
                end = nums.length - 1;
            while (start < end) {

                var sum = nums[start] + nums[end] + nums[i];

                if (sum === 0) {
                    
                    result.push([nums[i], nums[start], nums[end]]);
                    start++;
                    end--;

                    while (start < end && nums[start - 1] === nums[start]) {
                        start++;
                    }
                    while (start < end && nums[end + 1] === nums[end]) {
                        end--;
                    }

                    // set new start and end if current start is same as next one, end is same as prvious one.
                    // 
                } else if (sum < 0) {
                    start++;
                } else {
                    end--;
                }

            }
        }
    }

    return result;

};



var testingArray = Array.from({
    length: 10000
}).fill(0)
testingArray = testingArray.map((x) => Math.floor(Math.random() * 100));
testingArray = testingArray.map((x, i) => x = i % 2 === 0 ? x : x * -1);

console.log(threeSum(testingArray));
console.log(threeSum([-1, 1, 0, 2, -2]));