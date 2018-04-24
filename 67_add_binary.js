/**
 *  * @param {string} a
 *   * @param {string} b
 *    * @return {string}
 *     */
var addBinary = function(a, b) {
   
    let carry = 0;
    let result = "" ;
    let i = a.length - 1, j = b.length - 1;

    while( i >= 0 || j >= 0 || carry === 1){
      carry += i >= 0 ? +a[i] : 0;
      carry += j >= 0 ? +b[j] : 0;
      result = (carry % 2) + result;
      carry = carry > 1 ? 1 : 0;
      i--; j--;
    }
    return result;
};



