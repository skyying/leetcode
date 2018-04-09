/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * 題目: 給一個linked list K, start index m, end indest n, return a new linked list only reverse between m and n;
 * Idea: 有3個list, 前段未reverse, 中間reversed, 末段未reverse, 中間如何將未reversed變成reversed已經知道，挑戰會在如何連接
 * 前段的list, 末段的list。想法是記錄前段最後一個node, 讓它的next = reversed list, 但需注意如果從一開始就reverse的Case
 * 另外處理末端未排序list的問題, 就是記錄reverse list的第一個node, 讓他link到 end 之後的node 即可。 
 * 
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
   
    if( m===n || !head ) return head; //base case

    var current = head, count = 1, 
        start = null,   end=null,
        reverse = null;
    // start to track prePart
    // end to track last part
    // reverse to track inBetween reverse list

    while(current){

        var nxt = current.next;
        // store value to next iteration node;
        if(count === m-1){
            start = current;  
            // set start to previous node before reverse; 
        }else if (count >= m && count <= n ) {
            current.next = reverse;
            reverse = current;
            // if count is between m and n, make reverse list;

            if(count === m && !end ){
                end = reverse;
            } // init end and link end list to reverse list;
        }else if(count > n){
            end.next = current;
            end = end.next;
        } // if count is greater than n, add current to end;

        current = nxt;
        count++;
         // reset next iteration
    }

    if(start) {
        start.next = reverse;
        reverse = start;
        // link start list to reverse list; 
    }else{
        start = reverse;
        head = start;
        // if reverse is start from begining of list, set start to reverse;

    }

    return head;
};


function ListNode(val) {
    this.val = val;
    this.next = null;
 }



 var a = new ListNode(5);
 a.next = new ListNode(4);
 a.next.next = new ListNode(3);
 a.next.next.next = new ListNode(2);
 a.next.next.next.next = new ListNode(1);
 
 var b = reverseBetween(a, 1, 1);

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

console.log(listToArray(b));