/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    
    for(var i=0; i<nums.length; i++){

        if(nums[i]===nums[i+2]){
            nums.splice(i+2, 1);
            i--;
        }
        
    }
    return nums; 

};

console.log(removeDuplicates([1, 1, 1, 1]));