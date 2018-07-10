/**
 * @param {number} n
 * @return {number}
 * 題目: 每次只能踏 1 或 2 階,
 * 給樓梯的階數，求總共有幾種上樓梯的方法？舉例如果樓梯只有1階,
 * 那總共只有一種上樓梯的方式，如果樓梯有兩階，那有2種上樓梯的方式, [1, 1] or [2] 。
 * idea: 直覺跟recursion有關，先列舉 樓梯階數 1 - 5 階，發現跟 fibonacci
 * 數列很像，但是了recursion的方式，發現有time out的問題。 idea2, 爲什麼爬第n階的方法會是爬第n-1階 + 爬第n-2階的方法
 * 的總和呢？因爲，要上到第n階的前一階，一定是在第n-1階或第n-2階上，假設在第n-1階上，那麼到達n階的方法就是n-1階的所有方法
 * 都再加上最後一步, 也就是1,同理，假設在第n-2階上，到達第n階的方法就是本來抵達n-2階的方法再加上2。所以，抵達n階的方法就是
 * 抵達n-2階的方法再加上抵達n-1階的方法。
 * 這裏要做的就是，記得把算過的記下來，才不用每次都從第0階開始算。
 */

var climbStairs = function(n) {

    let res = [];
    let i = 0;

    while (i <= n) {
        if (i <= 2) {
            res[i] = i;
        } else {
            res[i] = res[i - 1] + res[i - 2];
        }
        i++;
    }
    return res[n];
};

console.log(climbStairs(5));
