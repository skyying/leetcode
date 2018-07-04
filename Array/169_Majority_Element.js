/**
 * @param {number[]} nums
 * @return {number}
 * 題目:找到陣列內佔最多數量的element是哪一個?
 * 舉例，像是[1, 2, 3, 3, 3], 需回傳3。
 * 第一個解法是先排序過後找第n/2個元素，缺點是最快也要O(n lognn)
 * 第二個解法是用一個叫做Moore’s Voting Algorithm.的算法，他的假設是這樣的
 * 假設 a元素就是majority, n個a元素跟m個其他不是a的元素互相抵消的話，最後一定會剩下a元素。
 * 這算法也太迷人了。時間複雜度是O(n)
 */

var majorityElement = function(nums) {
    return nums.sort((a, b) => a-b)[Math.floor(nums.length/2)];
};


var majorityElement = function(nums) {
    let candidate = nums[0], count = 1, current;
    for(let i = 1; i < nums.length; i++){
        current = nums[i];
        if(current === candidate ){
            count++; 
        }else if(count === 0){
            candidate = current; 
            count = 1;
        }else{
            count--; 
        }
    }
    return candidate;
};

let arr = [2, 3, 1, 2, 2, 2];
console.log("majorityElement(arr)", majorityElement(arr));
