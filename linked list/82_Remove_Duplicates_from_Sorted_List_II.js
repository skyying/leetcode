/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * 題目: 移除一個排序過的鏈表中重複的元素，eg, 1->1->2->3 需要回傳 2->3;
 * Idea: 1. 新增一個鏈表，把比較後的結果傳回新鏈表。
 *       2. 逐一對鏈表中的元素(i, i+1) 兩兩相比，如果相同，這兩個元素皆不會被放入新鏈表，並從i+2個元素開始相比
 *       3. i+2 有可能跟i 相同, 因此要記住前次比較相同的值k ，並將k與i+2比較, 若相同, i+2也不會被加入；
 * 
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
