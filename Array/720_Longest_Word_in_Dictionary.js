/**
 * @param {longesting[]} words
 * @return {longesting}
 * 題目: 給一個陣列裏面有n個字, 找出一個最長的單字, 這個單子的第0 到1,...到第0
 * 到n個字元都可以在這個陣列中找到。
 * 解法，把所有字都放到hash內，在依序的找每一個字的每個第0, 1...n個字是否再這裏面。
 */

// 解法一, 用object實作
var longestWord = function(words) {
    let hash = {},
        cur,
        longest = "";

    if (!words.length) return longest;

    let i = 0,
        len = words.length;
    for (; i < len; i++) {
        cur = words[i];
        hash[cur] = 1;
    }

    for (let i = 0; i < words.length; i++) {
        let j = 0;
        for (; j < words[i].length - 1; j++) {
            let word = words[i].slice(0, j + 1);
            if (!hash[word]) {
                break;
            }
        }
        if (j === words[i].length - 1) {
            if (
                words[i].length > longest.length ||
                (words[i].length === longest.length && words[i] < longest)
            ) {
                longest = words[i];
            }
        }
    }
    return longest;
};



// 解法2, 概念相似，但是用set實作，loop的對象也是以set爲主, 先假設條件，再進行loop, 更節省效率
var longestWord2 = function(words) {

    const hash = new Set(words),
        longest = "";

    // base case
    if (!words.length) return longest;

    hash.forEach(word => {
        if (
            word.length > longest.length ||
            (word.length === longest.length && word < longest)
        ) {
            let isGoodWord = true;
            for (let i = 0; i < word.length - 1; i++) {
                if (!hash.has(word.slice(0, i + 1))) {
                    isGoodWord = false;
                    break;
                }
            }
            if (isGoodWord) {
                longest = word;
            }
        }
    });

    return longest;
};

