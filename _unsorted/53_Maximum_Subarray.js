/**
 * @param {number[]} nums
 * @return {number}
 */

/**
 * 想法： 
 * 
 * 如果都是正數, 那麼只要回傳最後加總的值即可。
 * 所以關鍵在負數, 如果Array[i] < 0, 加上 Array[i] 之後讓總和變成負數, 那麼就得重新開始計算 
 * 爲什麼是總和變負數時才重新計算呢 ？  
 * 舉例Array [1, 1, -3], 可以看總和loop過這三個數字時分別是1(1), 2(1+1), -1(1+1-3),  
 * 當加了一個數字導致總和小於0, 就表示, 目前的總和不是最大總和, 因爲在尚未加這個數字之前總和還是正數
 * 因此表示我們得重新計算。
 * 
 * 下方的解法是用1D動態規劃
 * 如果 sum + Array[i] >=0, Sum = sum + Array[i] 
 * 如果 Sum + Array[i] < 0, Sum = Array[i] (重算)
 * 有一個maxSum的值來比較 Sum 與 MaxSum的大小, 最後回傳兩這比較後較大的。 
 */

var maxSubArray = function (nums) {

    var sum = nums[0],
        max = sum;
    for (var i = 1; i < nums.length; i++) {

        sum = Math.max(sum + nums[i], nums[i]);

        //if Sum >= 0, sum+= nums[i], else sum = nums[i]
        
        max = Math.max(sum, max);

    }
    return max;

};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])===6);
console.log(maxSubArray([1])===1);


