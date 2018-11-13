/**
 * @param {number} N
 * @return {number}
 */
var binaryGap = function(N) {
  let max = 0;
  let arr = N.toString(2).split("");

  arr = arr.map((x, i) => ({ val: x, i: i })).filter(x => x.val === "1");

  for (let i = 1; i < arr.length; i++) {
    if (arr[i].i - arr[i - 1].i > max) {
      max = arr[i].i - arr[i - 1].i;
    }
  }
  return max;
};

//解法二
var binaryGap = function(N) {
  let dist = 0,
    current = 0;
  let str = N.toString(2);

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "1") {
      if (i - current > dist) {
        dist = i - current;
      }
      current = i;
    }
  }
  return dist;
};

binaryGap(22);
