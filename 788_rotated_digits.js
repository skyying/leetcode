/**
 *  * @param {number} N
 *   * @return {number}
 *    */
var rotatedDigits = function(N) {
  let includeDigits = RegExp(/[2569]/), excludeDigits = RegExp(/[347]/);
  let count = 0;
  for(let i=1; i<=N; i++){
    if( !excludeDigits.test(i) && includeDigits.test(i)){
         count += 1;
    };
  }
  return count;
};
