/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {

    var ans = "",
        isNegtive = x < 0;

    x = x > 0 ? x + "" : (x + "").slice(1);
    for (var i = x.length - 1; i >= 0; i--) {
        ans += x[i];
    }

    ans = (isNegtive ? "-" : "") + ans;

    return +ans > -Math.pow(2, 32) && +ans < Math.pow(2, 32)  ? +ans :  0;
};

console.log(reverse(-123))
console.log(reverse(1230))
console.log(reverse(1563847412))