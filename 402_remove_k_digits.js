/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 * idea : https://bebest.gitbook.io/leetcode/402.-remove-k-digits
 */
var removeKdigits = function(num, k) {
    
    if(k === num.length) {
        return "0";
    }
    let requiredLen = num.length - k, stack = [num[0]], i = 1, result;
    while( i < num.length ){
        let top = stack[stack.length - 1], currentChar = num[i];
        while( k>0 && top && top > currentChar){
            k--;
            stack.pop();
            top = stack[stack.length - 1];
        }
            stack.push(currentChar);
            i++;
    }
    while(stack[0] =="0"){
        stack.shift();
    }
    if(stack.length === 0){ return "0"}
    return stack.slice(0, requiredLen).join("");
};


console.log(removeKdigits("1173", 2)==11);
console.log(removeKdigits("1170", 2)==10);
console.log(removeKdigits("10", 1)==0);
