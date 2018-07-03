/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {

    let i = 0,
        j = height.length - 1,
        maxArea = 0;

    while (i < j) {

        var area = Math.min(height[i], height[j]) * (j - i);
        maxArea = Math.max(area, maxArea);
        
        if (height[i] <= height[j]) {
            i++;
        } else {
            j--;
        }
    }
    return maxArea;
};


console.log(maxArea([1, 1, 3]))
console.log(maxArea([1, 2, 4, 3, 1, ]))