/** function TreeNode(val) {
 **     this.val = val;
 **     this.left = this.right = null;
 ** }
 **
 ** @param {TreeNode} root
 ** @return {number[]}
 **/

var inorderTraversal = function(root) {

  if(!root) return null;
  let reuslt = [];

  function inOrder(root){
    if(root){
      inOrder(root.left);
      result.push(root.left);
      inOrder(root.right);
    }

  } 

  inOrder(root); 
  return result;

};
