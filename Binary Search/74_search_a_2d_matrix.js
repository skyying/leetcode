
/**
 ** @param {number[][]} matrix
 ** @param {number} target
 ** @return {boolean}
 **/
//solution 1, find target belong to which row, and  find target in that row
var searchMatrix = function(matrix, target) {
    let row_low = 0, row_high = matrix.length - 1; 
    while(row_high >= row_low){
        row_mid = row_low + Math.floor((row_high-row_low)/ 2);
        if(target >= matrix[row_mid][0] && target <= matrix[row_mid][matrix[row_mid].length -1]){
            let high = matrix[row_mid].length - 1, low = 0
            while(high >= low){
                mid = low + Math.floor((high-low) /2);
                if(target == matrix[row_mid][mid]){
                    return true; 
                }else if(target > matrix[row_mid][mid]){
                    low = mid + 1;
                }else{
                    high = mid -1; 
                }
            }
            return false;
        }else if(matrix[row_mid][0] < target ){
            row_low = row_mid + 1; 
        }else{
            row_high = row_mid - 1; 
        }
    }
    return false;
};

// solution 2, this one is better and faster

var searchMatrix = function(matrix, target){
    let start = 0, row = matrix.length, col = matrix[0].length, end = row*col - 1;
    while(end >= start){
        let mid = start + Math.floor( (end - start) / 2),
        y = Math.floor( mid / col), x = mid % col;
        if(matrix[y][x] === target){
            return true; 
        }else if(matrix[y][x] < target){
            start = mid + 1; 
        }else{
            end =  mid - 1;
        }
    }
    return false;
}

let matrix = [
    [1,   3,  5,  7],
    [10, 11, 16, 20],
    [23, 30, 34, 50]
], 
    target = 50;
console.log(searchMatrix(matrix, target));
