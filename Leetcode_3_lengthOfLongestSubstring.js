var lengthOfLongestSubstring = function (s) {
    if (s.length <= 1) return s.length; //base case

    var substring = s[0],
        repeatedCharIndexInSubstring = -1,
        maxLength = 1,
        tmpLength = 1;

    for (var i = 1; i < s.length; i++) {
        repeatedCharIndexInSubstring = substring.lastIndexOf(s[i]);
        if (repeatedCharIndexInSubstring === -1) {
            substring += s[i]
        } else {
            substring = substring.slice(repeatedCharIndexInSubstring + 1, substring.length) + s[i];
        }
        tmpLength = substring.length;
        maxLength = tmpLength > maxLength ? tmpLength : maxLength;
    }
    return maxLength;
};
