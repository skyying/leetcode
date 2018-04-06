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

    var current = head, lastSameValue;
    var newHead = new ListNode();
    var currenNewHead = newHead;

    while(current){ 
        if(current.next && current.val === current.next.val){
            lastSameValue = current.val;
            current = current.next.next;
        }else if(current.val === lastSameValue){
            current = current.next;
        }else{
            currenNewHead.next = new ListNode(current.val);
            currenNewHead = currenNewHead.next; 
            current = current.next;
        }
    }
    console.log("a", newHead.next);
    return newHead.next;    
};

//Object - Node
function ListNode(val) {
    this.val = val;
    this.next = null;
 }


 // testcase
function Test_DeleteDuplicates(testArray, expectedArray){

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
        var testedList = deleteDuplicates(this.arrayToList(testArray));

        var result = this.listToArray(testedList);
        if(result.length !== expectedArray.length)
            return false;
        return result.every((val, i) => val === expectedArray[i]);
        
    };
    this.isEqual = this.valdate();
}

var test01 = new Test_DeleteDuplicates([1, 2, 2], [1]);
var test02 = new Test_DeleteDuplicates([1, 1, 2, 2], []);
var test03 = new Test_DeleteDuplicates([1, 2, 3], [1, 2, 3]);
var test04 = new Test_DeleteDuplicates([1, 1, 2, 2, 4, 5, 5], [4]);

console.log(test01.isEqual);
console.log(test02.isEqual);
console.log(test03.isEqual);
console.log(test04.isEqual);
