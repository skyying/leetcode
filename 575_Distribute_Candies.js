var distributeCandies = function(candles) {

    let kinds = new Set();
    candles.map(candle => kinds.add(candle));
    if (kinds.size >= candles.length / 2) {
        return candles.length / 2;
    } else {
        return kinds.size;
    }
};

let arr = [1, 1, 2, 2, 3, 3];

console.log(distributeCandies(arr));
