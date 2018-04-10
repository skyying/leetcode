/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * 題目: 改變linked list的順序, 從 a1, a2, a3, ...aN-2, aN-1, aN 變成 a1, aN, a2, aN-1, ...
 * 可以從這個題目中發現一些規律, 
 * 
 * 
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */

listToArray = function(list){
    var current = list;
    var arr = [], i=0;
    while(current){
        arr[i] = current.val;
        current = current.next;
        i++;
    }

    return arr;
};

arrayToList = function(arr){
    var head = new ListNode(arr[0]);
    var current = head;
    
    for(var i=1; i<arr.length; i++){
        var newNode = new ListNode(arr[i]);
        current.next = newNode;
        current = current.next;
    }
    return head;
};
var reorderList = function(head) {
   
    if(!head) return;
    
    var current = head;
    var slow = head, fast = head; prv = slow;

    function reverse(list){

        var curr = list;
        var reversed = null;

        while(curr){
            var nxt = curr.next;
            curr.next = reversed;
            reversed = curr;
            curr = nxt;
        }
        return reversed;
    }

    while(fast.next && fast.next.next){
        slow = slow.next;
        fast = fast.next.next;
    }

    var l1 = head;
    var l2 = reverse(slow.next);
    slow.next = null;
    
    
    while(l1 && l2){

        
            var l1nx = l1.next;
            var l2nx = l2.next;
           
            l1.next = l2;
            l2.next = l1nx;
            l1 = l1nx;
            l2 = l2nx;

    }
    console.log(listToArray(head));    
   
};



//Object - Node
function ListNode(val) {
    this.val = val;
    this.next = null;
 }

var a = arrayToList([1, 2, 3, 4, 5])

reorderList(a)