/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
   return haystack.search(needle);
};

console.log(strStr("", "")===0);
console.log(strStr("abaaa", "ba")===1);