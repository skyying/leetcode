/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    
    // go to l1 and make every node linked to their prvious node, 
    // check l2, if l2's one node's previous node already, then its the intersect

    if(!headA || !headB) return null;

    var currentA = headA;
    var currentB = headB;
    var lenA = 0, lenB = 0;

    while(currentA||currentB){
        if(currentA){
            lenA++;
            currentA = currentA.next;
        }
        if(currentB){
            lenB++;
            currentB = currentB.next;
        }
    }

    var diff = Math.abs(lenA - lenB);
    currenA =  headA; 
    currentB = headB;
    
    while(diff>0){
         if(lenA > lenB){
            currenA = currenA.next;
        }else{
            currentB = currentB.next;
        }
        diff--;
    }
    
    while(currenA && currentB){
        if(currenA.val === currentB.val){
            return current; 
        }else{
            currenA = currenA.next;
            currentB = currentB.next;
        }
    }

    return null;
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

var a = arrayToList([1]);
var b = arrayToList([1]);

//b.next.next = a.next.next;

console.log(listToArray(a));
console.log(listToArray(b));
console.log(getIntersectionNode(a, b));