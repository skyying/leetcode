/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
   
    
    var newList = new ListNode(null);
    var head = newList;
    if(!l1 || !l2) {
        return l1 || l2;
    }

    while(l1 || l2){
        if( (l1 && l2 &&  l1.val < l2.val) || !l2 ){
            newList.next = new ListNode(l1.val);
            l1 = l1.next;
        }else if( (l1 && l2 && l1.val >= l2.val) || !l1){
            newList.next = new ListNode(l2.val);
            l2 = l2.next;
        }
        newList = newList.next;
    }
    return head.next;
    
};


//Object - Node
function ListNode(val) {
    this.val = val;
    this.next = null;
 }


 // testcase
function Test_mergeTwoLists(testArray1, testArray2, expectedArray){

    this.testArray1 = testArray1;
    this.testArray2 = testArray2;
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

        var l1 = this.arrayToList(this.testArray1);
        var l2 = this.arrayToList(this.testArray2);
        var testedList = mergeTwoLists(l1, l2);
        var result = this.listToArray(testedList);
        if(result.length !== expectedArray.length)
            return false;
        return result.every((val, i) => val === expectedArray[i]);
        
    };
    this.isEqual = this.valdate();
}

//var test01 = new Test_removeNthFromEnd([1, 1], [1], 1);
var test01 = new Test_mergeTwoLists([1, 3, 5], [1, 5], [1, 1, 3, 5, 5]);
var test02 = new Test_mergeTwoLists([1, 1], [1, 3],[ 1, 1, 1, 3] );
//console.log(test01.isEqual);
console.log(test01.isEqual);
console.log(test02.isEqual);