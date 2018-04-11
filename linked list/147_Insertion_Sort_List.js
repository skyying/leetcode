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

var insertionSortList = function(head) {
   
    var dummy = new ListNode(0);
    var current = head, prev, small; 
    dummy.next = head;
    
    while(current && current.next){
    
        //while sorted, keep going.
        if(current.val <= current.next.val){
            current = current.next;
        }else{
            // otherwise, store the smaller value,
            // and let bigger value link to smaller values's next;
            // and find a place to link small value;
            
            // it will looks like this, [2, 1]
            // current is 2, and current.next = 1;
            prev = dummy;
            small = current.next; //store small one;
            current.next = small.next; // link  big one to neigber
            
            while(prev.next && small.val >= prev.next.val){
                prev = prev.next;
                //find next insertion location; 
            }
        
        
           small.next = prev.next;
           prev.next = small;
        }
         
    }
    return dummy.next;


    // if(!head) return head;

    // var newHead = new ListNode(Number.MIN_SAFE_INTEGER);
    // var cur_newHead = newHead, last = newHead, current = head;
    // var newNode = null, prev = null;

    // while(current){

    //     var nxt = current.next;
    //     newNode = current;
    //     current.next = null;

    //   while( newNode.val > cur_newHead.val){  
    //         if(!cur_newHead.next) break;
    //         prev = cur_newHead;
    //         cur_newHead = cur_newHead.next;
    //     } 
    //     if( newNode.val >= last.val){
    //         last.next = newNode;
    //         last = newNode; 
    //     }else{
    //         prev.next = newNode;
    //         newNode.next = cur_newHead;
    //     }
    //     cur_newHead = newHead;
    //     current = nxt;
    // }
    // return newHead.next;

};


function ListNode(val) {
    this.val = val;
    this.next = null;
 }



 var a = new ListNode(1);
 a.next = new ListNode(3);
 a.next.next = new ListNode(2);
//  a.next.next.next = new ListNode(4);
 
 var b = insertionSortList(a);


console.log(listToArray(b));