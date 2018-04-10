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


var reverseList = function(head) {

    var current = head;
    var reversed = null; //because start from first node, its next is null;
    
    while(current){
    
        var next = current.next;
        // next node for next iteration;
        
        current.next = reversed;
        // link current node to reversed list;
        
        reversed = current;
        // let reversed list's head current;
        
        current = next;
        // make current node to its original next node
    
    }
    
    return reversed;
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

var test01 = new Test_reverseList([ 1, 3, 2], [2, 3, 1]);

console.log(test01.isEqual);
