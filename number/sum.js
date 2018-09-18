function sum(n) {
    let count = 0;
    for (let i = 0; i <= n; i++) {
        count += i;
    }
    return count;
}

function sqrt(n) {
    let target = Math.floor(n / 2);
    while (Math.abs(target * target - n) > 0.0000000000001) {
        target -= 0.001;
    }
    return Math.abs(target);
}

// console.log(sqrt(16));

function sqrtRoot(n) {
    let low = 0,
        high = n;
    while (high > low) {
        mid = (high + low) / 2;
        if (mid * mid === n) {
            return mid;
        } else if (mid > n / mid) {
            high = mid;
        } else {
            low = mid;
        }
    }
}

console.log(sqrtRoot(88));
