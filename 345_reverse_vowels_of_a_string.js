/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {

    let vowel = ["a","e",'i',"o",'u', "A", "E", "I", "O", "U"];
    s = s.split("");

    let left = 0;
    let right = s.length-1;

    while( left < right){

        if(isVowel(s[left]) && isVowel(s[right])){
            [s[left], s[right]] = [s[right], s[left]];
            left += 1;
            right -= 1;
        }else if (isVowel(s[left]) ){
            right-=1;
        }else if (isVowel(s[right])){
            left += 1;
        }else{
            left += 1;
            right -= 1;
        }
    }

    function isVowel (s) {
        return vowel.indexOf(s) >= 0
    }

    return s.join("");
};
