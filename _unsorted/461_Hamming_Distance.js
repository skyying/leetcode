/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
   
   return (x^y).toString(2).split("").filter((val)=> val==='1').length;
   
};

console.log(hammingDistance(1, 4))
console.log(hammingDistance(93, 73))

