/*
 * 題目: 給一個2d array, array中的row的數字, 會由小排到大, col也會由小排到大, 如
 * [[1, 2, 5],
 *  [3, 4, 5],
 *  [4, 5, 6],]
 * 給一個數字，請找出這個Array中有沒有這個數字，有回傳true, else false
 * 解法: idea: 用sliding window的概念，先已左下角當基準點，如果target大於左下角，則移動col
 * index, 反之則移動row index
 */

function Find(target, array) {

    let i = array.length - 1,
        j = 0;

    while (i >= 0 && j < array.length) {
        let cur = array[i][j];
        if (cur === target) {
            return true;
        } else if (cur > target) {
            i--;
        } else {
            j++;
        }
    }
    return false;
}

let arr = [[1, 2, 8, 9], [2, 4, 9, 12], [4, 7, 10, 13], [6, 8, 11, 15]];
console.log(Find(25, arr));
