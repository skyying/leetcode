/**
 * @param {number[]} rec1
 * @param {number[]} rec2
 * @return {boolean}
 * 題目: 判斷是否給的兩個矩形有重疊，矩形座標給兩個point, point1爲左下角的x, y,
 * point2 爲右上角的x, y
 * 解法，其中一個方形的下面高於另一個的上面時，或其中一個方形的左邊小於另一個的右邊時，這兩個方形是沒有重疊的。
 * 排除這兩個狀況，就可以知道有沒有重疊了。
 */
var isRectangleOverlap = function([l1, b1, r1, t1], [l2, b2, r2, t2]) {
    return (
        l1 < r2 &&
        r1 > l2 &&
        b1 < t2 &&
        t1 > b2 
    );
};

let r1 = [0, 0, 2, 2],
    r2 = [1, 1, 3, 3];
let rr1 = [0, 0, 1, 1],
    rr2 = [1, 0, 2, 1];

console.log("isRectangleOverlap", isRectangleOverlap(r1, r2));
console.log("isRectangleOverlap", isRectangleOverlap(rr1, rr2));
