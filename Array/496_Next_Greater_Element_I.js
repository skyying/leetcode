/**
 * @param {number[]} findNums
 * @param {number[]} nums
 * @return {number[]}
 */
// 題目
// 給A, B Array, 對 A 中的每一個元素找其在B array中，相同元素的下一個最大的元素的值。
// 如 A = [2, 3], B = [1, 2, 3, 4], 那應該回傳 [ 3, 4], 爲 A的第一個元素2 在B array中
// 2的最近比2大的元素是3, 因此回傳3。

// 解法，先處理B array, 建一個hash把B Array中的每個元素的最近比較大的元素放進去。
// 再讓A來查詢。


var nextGreaterElement = function(findNums, nums) {

  let hash = {}, len = nums.length;
    for(let i = 0; i < len; i++){
        for(let j = i+1; j < len ; j++){
            if(nums[j] > nums[i]){
                hash[nums[i]] = nums[j];
                break;
            }
        }
        if(!hash[nums[i]]){
            hash[nums[i]]=-1;
        }
    }
    return findNums.map((val) => hash[val] );
};

let arr1 = [1, 3, 5, 2, 4];
let arr2 = [6, 5, 4, 3, 2, 1, 7];
console.log(nextGreaterElement(arr1, arr2));
// should equal [7, 7, 7, 7, 7];
