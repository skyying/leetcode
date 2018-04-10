/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * 題目: 給兩個排序過的linked list, 依大小merge這兩個list
 * l1: 1->2->3, l2: 2->2->4  => return 1->2->2->2->3->4
 * Idea: 創造一個新的list K, 比較l1和l2的頭, 看誰小就先放到K裏面, 需要處理l1, l2其中一個是空值的問題
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
   
    
    var newList = new ListNode(null);
    var head = newList;

    while(l1 && l2){

        if( l1.val < l2.val ){
            newList.next = l1;
            l1 = l1.next;
        }else{
            newList.next = l2;
            l2 = l2.next;
        }
        newList = newList.next;
    }

    if(!l1){
        newList.next = l2;
    }else{
        newList.next = l1;
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