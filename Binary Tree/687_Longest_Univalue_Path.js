/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

var longestUnivaluePath = function(root) {
  let count = 0;
  if(!root) return count;

  // base case
  const traverse = (node) => {
    if(!node) return 0;
    let left_len = traverse(node.left);
    let right_len = traverse(node.right);
    // if not the same, reset to 0
    let left = node.left && node.left.val == node.val ? left_len + 1 : 0;
    let right = node.right && node.right.val == node.val ? right_len + 1 : 0;
    // keep track current max length of left + right
    count = Math.max(count, left + right);
    // still need to return max len of either right node or left node 
    return Math.max(left, right);
  };

  traverse(root);
  return count;
};

