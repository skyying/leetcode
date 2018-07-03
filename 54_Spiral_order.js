/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {

    let top = 0, bottom = matrix.length - 1, left = 0, right = matrix[0].length - 1;
    let dir = 0;
    let result = [];


    while(left <= right && top <= bottom){
        if(dir===0) {
            for(let i = left; i<=right; i++){
                result.push(matrix[left][i]) 
            } 
            top++;
            dir = 1;
        }else if(dir===1){
            for(let i = top; i <= bottom; i++){
                result.push(matrix[i][right])
            }
            right--;
            dir=2; 
        }else if(dir===2){
            for(let i = right ; i >= left ; i--){
                result.push(matrix[bottom][i])
            }
            bottom--;
            dir=3;
        }else if(dir === 3){
            for(let i = bottom; i >= top; i--){
                result.push(matrix[i][left])    
            } 
            left++;
            dir = 0;
        }
    }


    return result;
};

let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
let arr1 = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]];
let a3 = [[2]];

console.log("spiralOrder", spiralOrder(arr));
console.log("spiralOrder", spiralOrder(arr1));
console.log("spiralOrder", spiralOrder(a3));

