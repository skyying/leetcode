/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {

    let s = x + "",
        len = Math.floor(s.length / 2);

    if (s < 0) return false;

    for (var i = 0; i < len; i++) {

        if (s[i] !== s[s.length - i - 1])
            return false;
    }

    return true;
};


console.log(isPalindrome(12221))
console.log(isPalindrome(121))
console.log(isPalindrome(11))
console.log(isPalindrome(1221))
console.log(isPalindrome(-10))
console.log(isPalindrome(10))