/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function (str) {

    var n = parseInt(str);

    if (!n) return 0;

    if (n > 2147483647) return 2147483647;
    if (n < -2147483648) return -2147483648;

    return n;

};

console.log(myAtoi("")===0)
console.log(myAtoi(" b123")===0)
console.log(myAtoi("+-123")===0)
console.log(myAtoi("-123")===-123)