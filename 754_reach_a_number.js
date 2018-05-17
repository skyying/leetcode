/**
 *  * @param {number} target
 *   * @return {number}
 *    */
var reachNumber = function(target) {

    let sum = 0, step = 0;
    target = Math.abs(target);

    while(sum < target || (sum-target) % 2 === 1){
        step++;
        sum += step;
    }
    return step;

};

console.log(reachNumber(5) === 5);
console.log(reachNumber(6) === 3);
