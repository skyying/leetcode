/**
 * @param {number[][]} matrix
 */
var NumMatrix = function(matrix) {

    return Array.from({length})


};

/** 
 * @param {number} row1 
 * @param {number} col1 
 * @param {number} row2 
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {

    let sum = 0;
    for(let i = row1; i <= row2; i++){
       for(let j = col1; j <= col2; j++){
           sum+= matrix[i][j];
       } 
    }

    return sum;

};

var sumRegion = function(matrix, row1, col1, row2, col2) {

    let sum = 0;
    for(let i = row1; i <= row2; i++){
       for(let j = col1; j <= col2; j++){
           sum+= matrix[i][j];
       } 
    }

    return sum;

};

let a1 = [
  [3, 0, 1, 4, 2],
  [5, 6, 3, 2, 1],
  [1, 2, 0, 1, 5],
  [4, 1, 0, 1, 7],
  [1, 0, 3, 0, 5]
]

console.log("sumRegion(matrix, 2, 1, 4, 3);", sumRegion(a1, 1, 1, 2, 2));



/** 
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = Object.create(NumMatrix).createNew(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
