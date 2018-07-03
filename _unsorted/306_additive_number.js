/**
 * @param {string} num
 * @return {boolean}
 */
var isAdditiveNumber = function(num) {

    let first = 0,
        second = 0,
        third = 0,
        thirdIndex = 0,
        len = num.length;

    var isLeadZero = (str) => {
        return str[0] === "0" && str.length > 1;
    }

    for (let i = 1; i < Math.ceil(len / 2); i++) {

        for (let j = 1; j < len; j++) {

            first = num.slice(0, i);
            second = num.slice(i, i + j);
            third = +first + +second + "";
            thirdIndex = i + j;

            if (thirdIndex + third.length > len || len - thirdIndex < j ||
                isLeadZero(first) || isLeadZero(second)) {
                break;
            }

            while (third === num.slice(thirdIndex, thirdIndex + third.length)) {
                first = second;
                second = third;
                thirdIndex += third.length;
                third = +first + +second + "";
            }

            if (thirdIndex === len) {
                return true;
            }
        }
    }
    return false;
}





console.log(isAdditiveNumber("199001200") === false);
console.log(isAdditiveNumber("101020305080130210") === true);
console.log(isAdditiveNumber("199100199") === true);
console.log(isAdditiveNumber("111122335588143") === true);
console.log(isAdditiveNumber("0112") === true);
console.log(isAdditiveNumber("0235813") === false);
console.log(isAdditiveNumber("112358") === true);
console.log(isAdditiveNumber("102345") === false);
console.log(isAdditiveNumber("123") === true);
console.log(isAdditiveNumber("101") === true);

// for(let i = 0; i < 5; i++){
//     console.log("i: == ", i);
//    for(let j = i; j < 5; j++){
//        console.log("j", j);
//        if(j>2) break;
//    } 
// }
