/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 * 題目detect linked list內是否有cycle, 1->2->3->2->3->...
 * idea: 怎麼判斷到底是不是有循環, 可以假想如果兩個選手跑在不同道路上, 則不管他們兩個速度如何，
 * 絕對不會相遇，但如果跑同一個操場，則速度快的最終將會追上速度慢的, 當追上的那刻
 * 就代表有Loop啦~ 這個演算法就叫做龜兔賽跑演算法XDDDD
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {

    var slow = head;
    var fast = head;

    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;
        if(slow === fast) return true;
       
    }

   return false;
};

