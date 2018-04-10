/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    if(!head) return head;
    var count = 1, len= 0;
    var current = head;

    while(current){
        len++;
        current = current.next;
    }
    
    current = head;

  
    if(n >= len ) {
        return head.next;
    }
    while(current){
        if( count === len-n ){
            
            current.next = current.next.next ;
    
        }else{

            current = current.next;
        
        }
        count++;
    }
    return head;
    
};



//Object - Node
function ListNode(val) {
    this.val = val;
    this.next = null;
 }


 // testcase
function Test_removeNthFromEnd(testArray, expectedArray, x){

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

        var testedList = removeNthFromEnd(this.arrayToList(testArray), this.x);
        var result = this.listToArray(testedList);
        if(result.length !== expectedArray.length)
            return false;
        return result.every((val, i) => val === expectedArray[i]);
        
    };
    this.isEqual = this.valdate();
}

//var test01 = new Test_removeNthFromEnd([1, 1], [1], 1);
var test01 = new Test_removeNthFromEnd([1, 3, 5], [1, 5] , 2);
var test02 = new Test_removeNthFromEnd([1, 3, 5], [1, 3] , 1);
var test03 = new Test_removeNthFromEnd([1, 3, 5], [3, 5] , 3);
//console.log(test01.isEqual);
console.log(test01.isEqual);
console.log(test02.isEqual);
console.log(test03.isEqual);