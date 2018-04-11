/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
        
    var arr = nums1.concat(nums2).sort((a, b)=>a-b),
        len = arr.length, 
        mid = Math.floor(arr.length/2);
    
    if(len%2===0) 
    {
        return (arr[mid] + arr[mid-1] ) / 2;
    }
    else
    {
        return arr[mid];
    }
    
};

//todo: better to use a merge sort apporach, will be more efficient.  

console.log(findMedianSortedArrays([1, 3], [2, 4])===2.5)
console.log(findMedianSortedArrays([2], [])===2)
console.log(findMedianSortedArrays([], [1])===1)
console.log(findMedianSortedArrays([1], [1])===1)
console.log(findMedianSortedArrays([], [1, 2, 3, 4])===2.5)
