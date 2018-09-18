const isPrime = n => {
    if (n % 2 == 0 || n % 5 == 0 || n % 3 === 0) {
        return false;
    }
    let root = Math.floor(Math.sqrt(n));
    for (let i = 2; i <= root; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
};

console.log("isPrime(37)", isPrime(112341234512359));
