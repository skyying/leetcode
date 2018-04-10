/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * 題目: 需要將這個node從linked-List中消除
 * Idea: 基本的把目前的變成下一個, 把目前的下一個變成下下個。
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(node) {
    if(node.next){
        node.val = node.next.val;
        node.next = node.next.next;
    };
};