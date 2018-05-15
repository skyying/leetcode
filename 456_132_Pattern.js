/**
 * @param {number[]} nums
 * @return {boolean}
 */
var find132pattern = function(nums) {

    let left = nums[0], center;
    for(let i = 1 ; i < nums.length; i++){
        center = nums[i];
        if(left < nums[i]){
            for(let j = i+1 ; j < nums.length; j++){
                if(center > nums[j] && nums[j] > left) {
                    return true;
                }
            } 
        }
        left = left < nums[i] ? left : nums[i];
    }
    return false;

};

console.log(find132pattern([3, 1, 4, 2]));
