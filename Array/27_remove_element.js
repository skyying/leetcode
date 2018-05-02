/* @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    for(let i=0; i<nums.length; i++){
        if(nums[i]===val){
            nums.splice(i, 1);
            i--;
            // when remove an element from array, need to udpate index of next element you want to check
        }
    }
    return nums.length;
};








