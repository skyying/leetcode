/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {

    let prefix = strs[0];
    if (!strs.length) return "";
    if (strs.length === 1) return strs[0];

    for (var i = 1; i < strs.length; i++) {

        for (var j = 0; j < prefix.length; j++) {
            if (strs[i][j] !== prefix[j]) {
                prefix = prefix.slice(0, j);
                break;
            }
        }
    }
    return prefix
};

console.log(longestCommonPrefix([])==="")
console.log(longestCommonPrefix(["a"])==="a")
console.log(longestCommonPrefix([""])==="")
console.log(longestCommonPrefix(["abc", "cba"])==="")
console.log(longestCommonPrefix(["abba", "abba", "ab"])==="ab")