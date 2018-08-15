/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

//解法1, 遞迴的比較左節點的樹跟右節點的樹，如果相差沒超過1, 則回傳true,
//這種方式最糟的情況會到O(n^2), 主要因爲計算height是另一個recursion,
//下面的寫法可以有效優化
var isBalanced = function(root) {
    var height = function(root) {
        if (!root) {
            return 0;
        }
        return Math.max(height(root.right) + 1, height(root.left) + 1);
    };
    if (!root) {
        return true;
    }
    let leftDepth = height(root.left),
        rightDepth = height(root.right);
    if (
        Math.abs(leftDepth - rightDepth) <= 1 &&
        isBalanced(root.left) &&
        isBalanced(root.right)
    ) {
        return true;
    }
    return false;
};




//解法2 
var isBalanced = function(root) {
  return balancedHelper(root) !== -1
}

const balancedHelper = root => {
  // base case
  if (root === null) {
    return 0;
  }

  const left = balancedHelper(root.left); // will return either not blanced -1 or max + 1
  const right = balancedHelper(root.right); // will return either not blanced -1 or max + 1
  if (left === -1 || right === -1) {
    return -1;
  }

  if (Math.abs(left - right) > 1) {
    return -1;
  }

  return Math.max(left, right) + 1;
}
