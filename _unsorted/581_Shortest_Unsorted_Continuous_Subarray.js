

/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
    let first = 0, last = nums.length - 1, i = 0, j = last;
    let sorted = nums.slice(0).sort((a, b)=>a-b);
    while(nums[i] === sorted[i] && i < nums.length){
        i++;
        first = i ;
    }
    if(first === j) {
        return 0;
    }
    while(nums[j] === sorted[j] && j >= first){
        j--;
        last = j;
    }
    return last - first + 1;
};

var findUnsortedSubarray = function(nums) {
    let len = nums.length, first = 0, last = -1; 
    // default setup for a sorted array
    let large = nums[len-1] ;
    let small = nums[0];
    // let default be the first and last element

    for(let i = 1; i < len ; i++){
        small = Math.max(nums[i], small);
        //start with the second element, samll should be the samllest between first and second element, 
        o
        large = Math.min(nums[len - i - 1], large);
        // start with the second-last, large should be the largest between last and second last;
        if(nums[i] < small){
            // if nums[i] is smaller than first
            last = i; 
        } // exception if 
        if(nums[len - i - 1] > large) {
            first = len - i - 1; 
        }
    }
       return last - first + 1; 
        

};
let arr3 = [1, 2, 3, 5, 4];
console.log(findUnsortedSubarray(arr3));
console.log("------");

let arr2 = [2, 1];
console.log(findUnsortedSubarray(arr2)===2);
let arr = [2, 6, 4, 8, 10, 9, 15];
console.log(findUnsortedSubarray(arr)==5);

let arr1 = [1, 2, 3, 4];
console.log(findUnsortedSubarray(arr1)==0);
