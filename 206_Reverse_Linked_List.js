/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 * 題目: Reverse a linked list
 * idea1, Iterate first round, record val,  create another linked list base on reverse order.
 * idea2, Iterate through list, change current pointer to it prvious node, before change, store
 * prvious node first, and remember to start next round with current's next node position. 
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

 //solution 1, 
var reverseList = function(head) {

    if(!head) return head;

    var store = [], i=0, current = head, newNode;
     
    while(current){
        store[i] = current.val;
        current = current.next;
        i++;
    }

    newNode = new ListNode(store[store.length-1]); //inital a new List
    
    head = newNode; //reset head
    current = head;
    
    for(var j = store.length - 2 ; j >= 0; j--){
        newNode = new ListNode(store[j]);
        current.next = newNode;
        current = current.next; 
    }
    return head;

};


//solution 2;
var reverseList = function(head) {

    if(head == null || head.next == null) {
            return head;
        }
        var prev = null, curr = head;
        
        while(curr) {

            var nxt = curr.next;
            // 先把下一個存起來, 下一次要從這裏開始
            curr.next = prev;

            // 前面就是自己, 把自己存下來 
            prev = curr;

            // 設定下一run要從哪裏開始
            curr = nxt;

        }
        return prev;

};



//Object - Node
function ListNode(val) {
    this.val = val;
    this.next = null;
 }


 // testcase
function Test_reverseList(testArray, expectedArray){

    this.testArray = testArray;
    this.expectedArray = expectedArray;
    
    this.arrayToList = function(arr){
        var head = new ListNode(arr[0]);
        var current = head;
        
        for(var i=1; i<arr.length; i++){
            var newNode = new ListNode(arr[i]);
            current.next = newNode;
            current = current.next;
        }
        return head;
    };

    this.listToArray = function(list){
        var current = list;
        var arr = [], i=0;
        while(current){
            arr[i] = current.val;
            current = current.next;
            i++;
        }

        return arr;
    };
    
    this.valdate = function(){

        var testedList = reverseList(this.arrayToList(testArray));
        var result = this.listToArray(testedList);
        if(result.length !== expectedArray.length)
            return false;
        return result.every((val, i) => val === expectedArray[i]);
        
    };
    this.isEqual = this.valdate();
}

var test01 = new Test_reverseList([ 1, 2], [2, 1]);

console.log(test01.isEqual);
