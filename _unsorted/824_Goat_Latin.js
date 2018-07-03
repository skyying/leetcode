/**
 * @param {string} S
 * @return {string}
 * @result: PASSED
 */
var toGoatLatin = function(S) {
    let ap = "";
    return S.split(" ")
        .map((x, i) => {
            ap += "a";
            let firstLetter = x[0];
            if ("aeiouAEIOU".indexOf(firstLetter) === -1) {
                x = x.slice(1) + firstLetter;
            }
            return x + "ma" + ap;
        }).join(" ");
};
let s = "I speak Goat Latin";
let s1 = "The quick brown fox jumped over the lazy dog";
let s2 ="s"

console.log(toGoatLatin(s));
console.log(toGoatLatin(s1));
console.log(toGoatLatin(s2));
