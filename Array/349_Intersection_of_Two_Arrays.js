/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 * 題目: 找到兩個array中, 那些元素是兩個Array都有, 只需回傳單一的值即可
 * 如A = [1, 2, 2, 3], B= [0, 2, 2, 5], 重疊的部分爲[2, 2], 則只需return [2]
 *
 * idea: 如果 x 在 A, 也在 B, 則把 x 記在set內。
 */


var intersection = function(nums1, nums2) {
    
    let s = nums1.length > nums2.length ? nums2 : nums1;
    let l = nums1.length > nums2.length ? nums1 : nums2;
     
    let result = new Set();

    for(let i = 0; i < s.length ; i++){
        if(l.indexOf(s[i]) !== -1){
            result.add(s[i]);
        }
    }

    return [...result];

};

let arr1 = [1, 2, 2];
let arr2 = [1, 0, 3];
console.log("intersection", intersection(arr1, arr2));
