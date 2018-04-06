/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * 題目: 把linked-list內的元素按照index 是奇數或偶數重新排序, 所有奇數index的在前, 偶數index在後
 * e.g.  1->2->3->4  =>  1->3->2->4
 * 
 * Idea: 開兩個新的鏈表O, E，loop過一次原本的鏈表，各自把奇數node加入鏈表O, 偶數node加入鏈表E, 最後另O鏈表
 * 最後一個node, 指向E鏈表的開頭, 回傳O鏈表。  
 * 
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function(head){
    //base case;
    if(!head || !head.next) return head;

    var odd = new ListNode(head.val),  even = new ListNode(head.next.val);
    var oddHead = odd, evenHead = even, current = head.next.next;
    var oddTail = odd, count = 1;
    
    while(current){
        var newNode = new ListNode(current.val);
        
        if(count%2===0){
            even.next = newNode;
            even = even.next;
        }else{
            odd.next = newNode;
            odd = odd.next;
            oddTail = odd;
        }
        count ++;
        current = current.next;
    }
    
    oddTail.next = evenHead;
    
    return oddHead;

};


//Object - Node
function ListNode(val) {
    this.val = val;
    this.next = null;
 }


 // testcase
function Test_oddEvenList(testArray, expectedArray){

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

        var testedList = oddEvenList(this.arrayToList(testArray));
        var result = this.listToArray(testedList);
        if(result.length !== expectedArray.length)
            return false;
        return result.every((val, i) => val === expectedArray[i]);
        
    };
    this.isEqual = this.valdate();
}

var test01 = new Test_oddEvenList([1, 1], [1, 1]);
var test02 = new Test_oddEvenList([1, 3, 5, 2, 4, 6], [1, 5, 4, 3, 2, 6]);

console.log(test01.isEqual);
console.log(test02.isEqual);