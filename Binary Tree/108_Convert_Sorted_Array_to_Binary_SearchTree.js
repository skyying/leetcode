/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 * 題目，給一組已經排序好的array, 回傳一組balanced的binary tree,
 * 解法，用recursion來實作，每一個節點的值都是傳進來的陣列中間那個元素，他的左邊子節點則是陣列左邊一半的中心點
 * 右邊子節點也是右邊陣列的中心點，如此類推，一直到傳進去的陣列的長度爲0爲止。
 * 用slice有點浪費，其實可以用index來追縱即可。
 */

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var sortedArrayToBST = function(nums) {

    if (!nums.length) {
        return null;
    }
    let mid = Math.floor(nums.length / 2);
    let root = new TreeNode(nums[mid]);

    root.left = sortedArrayToBST(nums.slice(0, mid));
    root.right = sortedArrayToBST(nums.slice(mid + 1, nums.length));

    return root;
};

console.log(
    "sortedArrayToBST([-10,-3,0,5,9])",
    sortedArrayToBST([-10, -3, 0, 5, 9]),
);


