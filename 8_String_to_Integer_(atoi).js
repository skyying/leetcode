/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function (str) {

    var re = /(.)?[+-\d]+/,
        digit = str.match(re) ? str.match(re)[0] : null;

    if (!+digit) return 0;

    if (+digit > 2147483647) return 2147483647;
    if (+digit < -2147483648) return -2147483648;

    return +digit;

};
