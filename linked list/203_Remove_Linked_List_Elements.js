/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
   
    var current = head;

    while(current && current.val === val){
        current = current.next ? current.next : null;
    }

    head = current; 

    while(current){
        if(!current.next){
            current.next = null;
            break;
        }else if( current.next && current.next.val === val){
            current.next = current.next.next ? current.next.next : null;
        }else{
            current = current.next;
        }
    }
    return head;
};



//Object - Node
function ListNode(val) {
    this.val = val;
    this.next = null;
 }


 // testcase
function Test_removeElements(testArray, expectedArray, x){

    this.testArray = testArray;
    this.expectedArray = expectedArray;
    this.x = x;
    
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

        var testedList = removeElements(this.arrayToList(testArray), x);
        var result = this.listToArray(testedList);
        if(result.length !== expectedArray.length)
            return false;
        return result.every((val, i) => val === expectedArray[i]);
        
    };
    this.isEqual = this.valdate();
}

var test01 = new Test_removeElements([ 2, 2, 4], [4], 2);
var test02 = new Test_removeElements([ 2, 2, 2], [], 2);

console.log(test01.isEqual);
console.log(test02.isEqual);
