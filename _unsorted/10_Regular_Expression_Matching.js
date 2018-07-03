/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
    p = "^" + p + "$"; //match entir string
    var re = new RegExp(p, "gi");
    return s.match(re) ? true : false;
};



console.log(isMatch("aa", "a"))
console.log(isMatch("aa", "aa"))
console.log(isMatch("aaa", "aa"))
console.log(isMatch("aa", "a*"))
console.log(isMatch("aa", ".*"))
console.log(isMatch("ab", ".*"))
console.log(isMatch("aab", "c*a*b"))