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
var deleteDuplicates = function(head) {
   
    // 如果下一個node.val same as current
    // 跑while loop, 重新指定node.next;
        var currentVal, headCopy;
        headCopy = head;
        while(head.next){
            currentVal = head.val;
            var next = head.next;
            if(currentVal == next.val ){
                head.next = head.next.next;
            }else{
                head = next;
            } 
        }
        return headCopy;
};

// function ListNode(val) {
//     this.val = val;
//     this.next = null;
// }
// var head = new ListNode(0);
// var current = head;
// for(var i=0; i<5; i++)
// {   
//     head.next = new ListNode(1);
//     head = head.next;
   
// }

// console.log(deleteDuplicates(current));
