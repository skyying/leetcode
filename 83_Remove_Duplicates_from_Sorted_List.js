/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * Given a sorted linked list, delete all duplicates such that each element appear only once
 * 
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
   
      // base case, return head if no head.next or head doesn't exist;    
      if(!head || !head.next) return head;

      // define head.next; head.next will be a result after excuted deleteDuplicates
      // for example, a link list 1->1->2;
      // if first and second are different, then they should return first + result of deleteDuplicates(second)
      // else, they should just be result of deleteDuplicates(second), since first and second are the same. 
      head.next = deleteDuplicates(head.next);
      return head.val === head.next.val ? head.next : head;
       
};
