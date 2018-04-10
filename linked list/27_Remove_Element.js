/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    
    for(var i=0; i<nums.length; i++){
        
        if(nums[i] === val){
            nums[i] = nums[i+1];
           // i--;
        }

        console.log(nums[i], val, nums); 
    }
    console.log(nums); 
    return nums;
    
};

console.log(removeElement([1, 3, 4], 3));