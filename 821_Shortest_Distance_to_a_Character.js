

/**
 * @param {string} S
 * @param {character} C
 * @return {number[]} 
 */
var shortestToChar = function(S, C) {

    let match = [], result =[];
    for(let i = 0; i < S.length; i++){
        if(S[i] === C){
            match.push(i);
        }
    }
    for(let i = 0, j=0; i < S.length; i++){
        if( match[j + 1] && i >= match[j + 1]) {
            j++;
        }
        if(i > match[j] && i < match[j + 1]) {
            let mid = match[j] + Math.floor((match[j + 1] - match[j]) / 2); 
            result[i] = i <= mid ? i - match[j] : match[j+1] - i;
        }else{
            result[i] = i === match[j] ? 0 : Math.abs(match[j] - i);
        } 
    };
    return result;
}

let S = "loveleetcodea", C = 'e';
console.log(shortestToChar(S, C));
