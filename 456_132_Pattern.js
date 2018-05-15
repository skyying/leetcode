/**
 * @param {number[]} nums
 * @return {boolean}
 */ 
//solution 1 o(n^2)
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


// solution 2, o(n)

var find132pattern = function(nums){

    let min = [nums[0]], stack = [];

    for(let i = 1; i < nums.length; i++){
        min[i] = Math.min(min[i-1], nums[i]);
    }
    for(let j = nums.length - 1; j > 0 ; j--){
        if(nums[j] > min[j]){
            while(stack.length > 0 && stack[stack.length -1] <= min[j]){
                stack.pop();
            }
            if(stack.length > 0 && stack[stack.length -1] < nums[j] ) {
                return true; 
            }
            stack.push(nums[j]);
        }
    }
    return false
}

console.log(find132pattern([3, 1, 4, 2]));
