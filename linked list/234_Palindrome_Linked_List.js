/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * 題目 : 檢查一個list 是不是Palindrome
 * idea 1: 第一個想到的想法是一樣切成兩個list, 反轉第二個list,再與第一list進行比較, 奈何這樣效率佷差。
 * idea 2: 除了reverse list可以得到反轉的排序之外, 也可以使用多增加一個prev properity來做，記得每個node的
 * 前一個是什麼。因此當從頭開始, 最一開始的node的prev值是null, 下一個的prev 是現在這個, 逐步loop到底時, 可以
 * 利用prev屬性回到前一個，因此prev屬性最終的目的是爲了讓我們可以從後面loop回來, 因此我們就可以跑一次迴圈, 
 * 同時比較從頭開始的node跟從後面loop回來的node, 假設他們自始至終都相同，那麼就可以確認是Palindrome
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    
    var current = head;
    current.prev = null;

    while(current.next){

        current.next.prev = current;
        current = current.next;

    }

    while(current){
        if(current.val !== head.val){
            return false;
        }
        current = current.prev;
        head = head.next;
    
    }

    return true;
   
  
};

function ListNode(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
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

var list = arrayToList([1, 4, 3, 4, 1]);
console.log(isPalindrome(list));