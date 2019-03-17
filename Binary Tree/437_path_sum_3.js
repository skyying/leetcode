/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number}
 */
var pathSum = function(root, sum) {
  let count = 0;
  const check = (node, _sum) => {
    if (node) {
      if (node.val == _sum) {
        check(node.left, _sum - node.val);
        check(node.right, _sum - node.val);
      }
    }
  };

  const tree = node => {
    if (node) {
      check(node, sum);
      tree(node.left);
      tree(node.right);
    }
  };

  tree(root, sum);
  return count;
};
