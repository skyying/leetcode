/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
    var single; 
    for(var i=0; i<nums.length; i+=2){
        if(nums[i]!==nums[i+1]){
            single = nums[i];
            break;
        }
        
    }  
    return single; 
};

console.log(singleNonDuplicate([3,3,7,7,10,11,11])) //10