/**
 * @param {string} s
 * @return {string}
 */


var longestPalindrome = function (s) {
  
  s = "#" + s.split("").join("#") + "#";
  // make all string odd 
  var right = 0,
    centerPosition = 0,
    start = 0,
    end = 0,
    max = 1, 
    palindromeLength = Array.from({
    length: s.length
  }).fill(0);
  
  for (var i = 1; i < s.length; i++) {

    if (right > i) {
      palindromeLength[i] = Math.min(palindromeLength[2 * centerPosition - i], right - i)
    }
    
    while ((s[i + palindromeLength[i]] === s[i - palindromeLength[i]]) &&
      ((i + palindromeLength[i] < s.length) && (i - palindromeLength[i] >= 0))
    ) {
      palindromeLength[i]++;
    }

    if (max < palindromeLength[i]) {
      max = palindromeLength[i];
      start = i - palindromeLength[i] + 1;
      end = i + palindromeLength[i] - 1;
    }

    if (i + palindromeLength[i] > right) {
      right = i + palindromeLength[i];
      centerPosition = i;
    }
  }
  return s.slice(start, end).split("#").join("");
};