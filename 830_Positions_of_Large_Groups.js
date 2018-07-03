/**
 * @param {string} S
 * @return {number[][]}
 */
var largeGroupPositions = function(S) {
    let result = [],
        distance = 2;
    if (S.length < distance) { return result; }
    let first = (last = 0);
    const addPair = () => {
        if (last - first >= distance) {
            result.push([first, last]);
        }
    };
    for (let i = 1; i < S.length; i++) {
        if (S[i] !== S[i - 1]) {
            addPair();
            first = last = i;
        } else {
            last++;
        }
    }
    addPair();
    return result;
};

console.log(largeGroupPositions("abcdddeeeeaabbbcd"));
