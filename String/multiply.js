// leetcode, multiply 2 string
function multiply(num1, num2) {
  let result = [];
  for (let i = num1.length - 1; i >= 0; i--) {
    for (let j = num2.length - 1; j >= 0; j--) {
      let idx = num1.length - 1 - i + num2.length - 1 - j;
      result[idx] =
        (result[idx] === undefined ? 0 : result[idx]) + +num1[i] * +num2[j];
    }
  }

  let final = [];
  let carry = 0;

  for (let k = 0; k < result.length + 1; k++) {
    let sum = carry + (result[k] === undefined ? 0 : result[k]);
    carry = Math.floor(sum / 10);
    if (final[k] === undefined) {
      final[k] = 0;
    }
    final[k] = sum % 10;
  }

  // trim leading zero
  return final
    .reverse()
    .join("")
    .replace(/^0/, "");
}

console.log(multiply("123", "123"));
