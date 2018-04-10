/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * 題目 : 每兩個node, 各自兩兩交換後, 回傳整個list, e.g. 1->2->3->4  return 2->1->4->3 
 * Ideas: https://bebest.gitbook.io/leetcode/24.-swap-nodes-in-pairs
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
   

    var current = head;

    var firstNode = new ListNode(0); 
    firstNode.next = head;
    var prev = firstNode, nxt;
    
    while(current && current.next){
        nxt = current.next.next; 
       
        current.next.next = current; 
        prev.next = current.next; 
        
       
        current.next = nxt; 
        prev = current; 

        current = nxt;

    }

    return firstNode.next;
    
 
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

var a = arrayToList([1, 2, 3, 4, 5, 6]);
 
console.log(listToArray(swapPairs(a)));