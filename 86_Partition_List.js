/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * 題目, 傳入一個linked list Head, 與值x, 需將Head重新排序成比x小在前, 大於或等於x在後。
 * e.g. list = 1->4->3->1, x = 2, 需傳回 1->1->4->3 
 * 
 * Idea: 這題與328 Odd,Even Linked List解法類似, 皆是把原鏈表的元素分堆, 再重新連接起來；
 * 不同的地方是要多處理一些例外狀況, 如整個鏈表都是小於x值時或這相反的情況。
 * 
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    
    if(!head || !head.next) return head;
    
    var lessThan = new ListNode(),  greaterEqualThan = new ListNode();
    var lessThanHead = lessThan, greaterEqualThanHead = greaterEqualThan, current = head;
    var lessThanTail = lessThan;
    
    while(current){
        var newNode = new ListNode(current.val);
        
        if(current.val < x){
            lessThan.next = newNode;
            lessThan = lessThan.next;
            lessThanTail = lessThan;
            
        }else{
            greaterEqualThan.next = newNode;
            greaterEqualThan = greaterEqualThan.next;
        }
        current = current.next;
    }
   


    lessThanHead = lessThanHead.next ?  lessThanHead.next : null;
    greaterEqualThanHead = greaterEqualThanHead.next ? greaterEqualThanHead.next : null;

    if(!lessThanHead || !greaterEqualThanHead){
        return lessThanHead || greaterEqualThanHead;
    }
    
    lessThanTail.next = greaterEqualThanHead;
    
    return lessThanHead; 
};



//Object - Node
function ListNode(val) {
    this.val = val;
    this.next = null;
 }


 // testcase
function Test_partition(testArray, expectedArray, x){

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

        var testedList = partition(this.arrayToList(testArray), x);
        var result = this.listToArray(testedList);
        if(result.length !== expectedArray.length)
            return false;
        return result.every((val, i) => val === expectedArray[i]);
        
    };
    this.isEqual = this.valdate();
}

var test02 = new Test_partition([2, 1], [1, 2], 2);
var test01 = new Test_partition([1, 1], [1, 1], 2);

console.log(test02.isEqual);
console.log(test01.isEqual);