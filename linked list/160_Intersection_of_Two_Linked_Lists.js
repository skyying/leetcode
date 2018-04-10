/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
    
/**
 * 題目: 找到兩個Linked List的交點, 如果沒有交點, 則回傳null;
 * 想法: https://bebest.gitbook.io/leetcode/160.-intersect-of-two-linked-list;
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    
    if(!headA || !headB) return null;

    var pA = headA, pB = headB;

    while(pA !== pB){  // 如果pA == pB 則直接回傳 pA

        pA = pA === null ? headB : pA.next;
        pB = pB === null ? headA : pB.next;

        //最多跑兩迴圈就可以
        //假設A list 長度5, B list長度 3, 則A list 比完接 B list, 另一個則是B List 比完接 A list
        //兩個長度就會各是 8, 舉例 list A = [4, 5, 6], B =[1, 2, 3, 5, 6]

        //則兩個比較的list 各會是 [4, 5, 6, 1, 2, 3, 5, 6] v.s [1, 2, 3, 5, 6, 4, 5, 6]
        //因爲 一開始,A 長度短, 因此比完後, 換長度長的, 假設後面有重複的地方, 則在比完第一run的前面後
        //會抵消有差異的地方. 因此, 最終可以再第二run的後面找到答案。 也就是消耗完長的時候。

    }

    

    return pA;

};


function ListNode(val) {
    this.val = val;
    this.next = null;
}

arrayToList = function(arr){
    var head = new ListNode(arr[0]);
    var current = head;
    
    for(var i=1; i<arr.length; i++){
        var newNode = new ListNode(arr[i]);
        current.next = newNode;
        current = current.next;
    }
    return head;
};

listToArray = function(list){
    var current = list;
    var arr = [], i=0;
    while(current){
        arr[i] = current.val;
        current = current.next;
        i++;
    }

    return arr;
};

var a = arrayToList([1, 2 , 3]);
var b = arrayToList([1, 3, 5, 7]);
b.next.next.next.next = a.next;
//b.next.next = a.next.next;

console.log(listToArray(a));
console.log(listToArray(b));
console.log(getIntersectionNode(a, b));