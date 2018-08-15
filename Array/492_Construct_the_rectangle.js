/**
 * @param {number} area
 * @return {number[]}
 */
var constructRectangle = function(area) {
    let n = Math.floor(Math.sqrt(area));
    for (let i = n; i < area; i = n++) {
        if (area % i === 0) {
            return area / i >= i ? [area / i, i] : [i, area / i];
        }
    }
    return [area, 1];
};

console.log("constructRectangle(8);", constructRectangle(1));
