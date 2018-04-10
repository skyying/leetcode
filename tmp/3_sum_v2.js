var threeSum = function(nums) {
    
    var res = [];
    if (!nums || nums.length < 3) return res;
    
    nums.sort((v1, v2) => {
        return v1 - v2;
    });
    
    var start = 0,
        end = 0;
    
    for (var i = 0; i < nums.length - 2; i++) {
        
        if (i === 0 || nums[i] > nums[i - 1]) {

            // 當 i == 0  or 現在這個大於前面時, 才跑

            start = i + 1;
            end = nums.length - 1;

            while (start < end) {

                // 如果start < end

                var sum = nums[i] + nums[start] + nums[end];
                if (sum === 0) {
                    res.push([nums[i], nums[start], nums[end]]);
                    start++;
                    end--;
                    while (start < end && nums[start - 1] === nums[start]) {
                        start++;
                    }
                    while (start < end && nums[end + 1] === nums[end]) {
                        end--;
                    }
                } else if (sum < 0) {
                    start++;
                } else {
                    end--;
                }
            }
        }
    }
    
    return res;
};

var a = Array.from({length:10000}).fill(0)
a = a.map( (x) =>  Math.floor(Math.random() * 100))
a = a.map((x, i)=> x = i%2===0 ? x : x*-1 )
console.log(a)
console.log(threeSum(a))
console.log(threeSum([1, -1, 0, 2, -2, 1, -1]))