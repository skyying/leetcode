/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    
    if(!s) return s; 
    
    var freq = {};

    for (let i = 0; i < s.length; i++) {
        if(!freq[s[i]]){
            freq[s[i]]=0;
        }
        freq[s[i]] ++;
    }
    var query = [];
    for(let element in freq){
        query.push([freq[element], element]);
    }    
    

    function sortFunction(a, b) {
        if (a[0] === b[0]) {
            return 0;   
        }
        else {
            return (a[0] < b[0]) ? 1 : -1;
        }
    }
    return query.sort(sortFunction).map((val) => val = val[1].repeat(val[0])).join(""); 
    
};

console.log(frequencySort(""));