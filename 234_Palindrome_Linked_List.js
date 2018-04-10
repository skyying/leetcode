/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    
    var current = head;
    current.prev = null;

    while(current.next){

        current.next.prev = current;
        current = current.next;

    }

    while(current){
        if(current.val !== head.val){
            return false;
        }
        current = current.prev;
        head = head.next;
    
    }

    return true;
    // while(fast.next && fast.next.next){
    //     slow = slow.next;
    //     fast = fast.next.next;
    // }

    // function reverseList(list){
    //     var curr = list;
    //     var revesed = null;
    //     while(curr){
    //         var nxt = curr.next;
    //         curr.next = revesed;
    //         revesed = curr;
    //         curr = nxt;
    //     }
    //     return revesed;
    // }
    // var l1= head;
    // var l2 = reverseList(slow.next);
    // slow.next = null;
   
    // while(l1 && l2){
    //     if(l1.val !== l2.val){
    //         return false;
    //     }
    //     l1 = l1.next;
    //     l2 = l2.next;
    // }

   

    // return true;
  
};

function ListNode(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
 }

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

var a = arrayToList([1, 4, 3, 4, 1]);
console.log(isPalindrome(a));