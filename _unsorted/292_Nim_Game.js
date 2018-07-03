/**
 * @param {number} n
 * @return {boolean}
 */
var canWinNim = function(n) {
    return n < 4 ? true : n % 4 !==0 ; 

    // balance n to a multiple of 4 will make you win.
    // Win at Nim! The secret mathematical strategy for kids 
    // (with challange problems in transfinite Nim for the rest of us)
    // http://jdh.hamkins.org/win-at-nim-the-secret-mathematical-strategy/

};