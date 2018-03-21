/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    
    let result=0, j=0,
        decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
        roman = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];

        for(var i=0; i<roman.length; i++){
            while(s.indexOf(roman[i])===0){
                result += decimal[i];
                s = s.slice(0, s.indexOf(roman[i])) + s.slice(s.indexOf(roman[i]) + roman[i].length, s.length);
                j++
            }
        }
        return result;

};

console.log(romanToInt("MDCCXXXIX"))