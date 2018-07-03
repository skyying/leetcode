/**
 *  * @param {number[]} nums
 *   * @return {number}
 *    */
var removeDuplicates = function(nums) {
        
    let index = 0;
    for(let i = 0; i < nums.length ; i++){
        if(nums[i] !== nums[i+1]){
           nums[index]  = nums[i]
           index++;
        }
    }
    return index;
};



// the solution above will have an index out of range issue
// though while i+1 is out of range, the compare will be value === undefined
// it is still valid, but this is not the best solution we can get


var removeDuplicates = function(nums) {
    
    let tailIndex = 0;
    for(let i = 1; i < nums.length; i++){
        if(nums[i] !== nums[tailIndex]){
            tailIndex++;
            nums[tailIndex] = nums[i];
        } 
    }
    return tailIndex + 1;
}

// why return tailIndex + 1 instead of tailIndex itself is
// because there will have a scenario like [1, 1]
// when all elements are the same in this array

console.log(removeDuplicates([1, 1]));
console.log(removeDuplicates([1,1, 2, 3, 3, 4,]));



// the solution above will have an index out of range issue
// though while i+1 is out of range, the compare will be value === undefined
// it is still valid, but this is not the best solution we can get


var removeDuplicates = function(nums) {
    
    let tailIndex = 0;
    for(let i = 1; i < nums.length; i++){
        if(nums[i] !== nums[tailIndex]){
            tailIndex++;
            nums[tailIndex] = nums[i];
        } 
    }
    return tailIndex + 1;
}

console.log(removeDuplicates([1, 1]));




