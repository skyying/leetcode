/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
   if(needle.length===0) return -1;
   if(needle.length===1){
       return haystack.indexof(needle);
   }else{
       return haystack.search(needle)
   }
    
};