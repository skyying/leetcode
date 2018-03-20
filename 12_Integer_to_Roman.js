/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    var result = '';
    var decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    var roman = ["M", "CM","D","CD","C", "XC", "L", "XL", "X","IX","V","IV","I"];

    for(var i=0; i<decimal.length + 1; i++){
        
        while( num%decimal[i] < num) {
            result += roman[i];
            num -= decimal[i];
        }
    }
    return result;
};

console.log(intToRoman(14)==="XIV")
