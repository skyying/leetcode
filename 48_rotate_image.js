/**
 *  * @param {number[][]} matrix
 *   * @return {void} Do not return anything, modify matrix in-place instead.
 *    */
var rotate = function(matrix) {
    let h = matrix.length - 1;
    let w = matrix[0].length - 1;
    for(let i=0 ; i<=h; i++){

       matrix[h+i+1] = [];
       for(let j =0; j<=w; j++){ 
            matrix[h+i+1].push(matrix[h - j].shift());
          }
      }
    for(let i=0; i<=h; i++){
        matrix.shift() 
    }
  return matrix;
};


// this is not the best solution since 

const m = [
  [1,2,3],
  [4,5,6],
  [7,8,9]
];

console.log(rotate(m));
