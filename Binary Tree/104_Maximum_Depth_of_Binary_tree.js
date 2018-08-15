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
 * 題目: 給一個Binary tree, 求這顆樹潛在的最高高度，如果資料結構是array,
 * 那麼可以直接用公式計算即可，可惜這裏給的是linked list
 */


// 不用遞迴的方式，用兩個while來處理，第一個while,
// 用來檢查是不是那一層遍歷後沒有多餘的node需要再檢查，也就是是不是最後一層了，如果是最後一層，那麼就回傳高度
// 第二個迴圈是，則是把該層的子節點再加入到Queue內，之後可以再遍歷。

var maxDepth = function(root) {
    if (!root) {
        return 0;
    }
    let queue = [root];
    let height = 0,
        count = 0;

    while (queue) {
        count = queue.length;
        if (!count) {
            return height;
        }
        height++;
        while (count) {
            // pop first element of queue
            let node = queue.shift(0);
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
            count--;
        }
    }
};


// 一樣先處理base case,
// 接着設兩個變數，一個是左邊的高度，另一個是右邊的高度，每一次比較，如果左邊的高度大於右邊，那麼高度就加一
// 反之也也是。一直到沒有高度爲止，就會回傳加總後的高度。
var maxdepth = function(root) {
    if (!root) { return 0; }
    let leftdepth = maxdepth(root.left),
        rightdepth = maxdepth(root.right);
    return leftdepth > rightdepth ? leftdepth + 1 : rightdepth + 1;
};


//概念一樣是遞迴，只是用Math.max的函數來做比較
var maxdepth = function(root) {
   if (!root) { return 0; }
    return Math.max(maxdepth(root.right) + 1, maxdepth(root.left) + 1);
};


