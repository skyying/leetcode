/**
 * @param {number} n
 * @return {number}
 */
// solution 1 , time limited exceed!
var countPrimes = function(n) {

    if(n < 2) return 0;
    let count = 0, primes = [2], isPrime = false;

    for(let i = 3; i <= n; i+=2){
        isPrime = true;
        for(let j = 0; j < primes.length; j++){
            if(i % primes[j] === 0 ){
                isPrime = false ;
                break;
            }

        }
        if(isPrime){
            primes.push(i) ;
        }
    } 
    return primes.length;

};

// solution 2, by using Sieve_of_Eratosthenes methods to find primes count
// https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes
var countPrimes = function(n) {
    let primes = new Array(n), count = 0;
    for(let i = 2; i <n ; i++){
       if(!primes[i]) {
            count++;
           for(let j = i; j * i< n ; j++){
              primes[i*j] = 1;
           }
       }
    };

    return count;
};

console.log(countPrimes(20) === 8);
