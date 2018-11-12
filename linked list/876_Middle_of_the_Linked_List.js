/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 /* 寫法的解釋在python版，主要是利用一個龜兔賽跑的演算法 */

var middleNode = function(head) {
    
    if(!head.next) {return head};
    
     let fast = head;
    let slow = head;
    let dummy = head;
    
    while(fast && fast.next){
        fast = fast.next.next;
        slow = slow.next;
        
        if(!fast || !fast.next){
            
            return slow;
        }
    }
    
    
};