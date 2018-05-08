/**
 * @param {number[]} widths
 * @param {string} S
 * @return {number[]}
 */
var numberOfLines = function(widths, S) {

    let lines = 0, remainder = 0;
    let alphaStr = "abcdefghijklmnopqrstuvwxyz" ;
    let alphabet = {} ;

    for(let i = 0; i < alphaStr.length; i++){
        alphabet[alphaStr[i]] = i;
    }

    for(let i = 0 ; i < S.length ; i++){
        let w = widths[alphabet[S[i]]];
        if(remainder + w >= 100 ){
            lines += 1;
            remainder = (remainder + w ) > 100 ? w : 0;
        }else{
            remainder += w ;
        }
    }
    lines += remainder === 0 ? 0 : 1;
    return [lines , remainder];
};


widths = [4,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10]
S = "bbbcccdddaaa"
console.log(numberOfLines(widths, S));
