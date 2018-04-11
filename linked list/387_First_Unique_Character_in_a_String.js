/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    if(s.length===1){
        return 0;
    }
    
    for(var i=0; i<s.length -1; i++){
        
        if(s.lastIndexOf(s[i])===s.indexOf(s[i])){
            return i;
        }
        
    }
    return -1;
};