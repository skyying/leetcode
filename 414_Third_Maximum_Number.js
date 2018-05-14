/**
 * @param {number[]} nums
 * @return {number}
 * idea : https://bebest.gitbook.io/leetcode/414.-third-maximum-number
 */
var thirdMax = function(nums) {
    let topThree = [nums[0]];
    let i = 0;
    for(let i = 1; i < nums.length; i++){
        if( topThree.indexOf(nums[i]) === -1){
            if(topThree.length < 3) {
                topThree.push(nums[i]);
            }else{
                let minIndex = topThree.indexOf(Math.min(...topThree));
                if(nums[i] > topThree[minIndex]){
                    topThree[minIndex]  = nums[i];
                }
            }
        } 
    }
    if(topThree.length < 3){
        return Math.max(...topThree) ;
    }
    return Math.min(...topThree)
};
console.log(thirdMax([2, 4, 1, 3, 4, 5]) === 3);
console.log(thirdMax([2, 1]) === 2);
console.log(thirdMax([2, 2, 3, 1]) === 1);
