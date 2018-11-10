/**
 * @param {number[]} A
 * @return {number[]}
 * problem: 把偶數放在Arr的前面，奇數放在arr的後面
 * idea1: 可以創造一個空的array, loop Array，如果是奇數，就從後面開始assign，如果是偶數，就從前面開始assign位置。
 * idea2: 往前找到第一個奇數，跟從後面找到的第一個偶數做交換，一直到找到的奇數的index大於找到的偶數的index。
 */

// idea 1
var sortArrayByParity = function(A) {
let left = 0, right = A.length - 1, arr = [];

for(let i = 0; i<A.length; i++){
    if(A[i] % 2 > 0){
        arr[right] = A[i];
        right--;
    }else{
        arr[left] = A[i]
        left++;
    }
}
return arr;
}
sortArrayByParity([2, 1, 2, 5])
// idea 2

//  var sortArrayByParity = function(A) {
//   let left = 0,
//     right = A.length - 1;

//   while (left < right) {
//     if (A[left] % 2 > A[right] % 2) {
//       let tmp = A[left];
//       A[left] = A[right];
//       A[right] = tmp;
//     }
//     if (A[left] % 2 === 0) {
//       left++;
//     }
//     if (A[right] % 2 === 1) {
//       right--;
//     }
//   }
//   return A;
// };
