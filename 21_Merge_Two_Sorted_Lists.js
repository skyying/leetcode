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
  //  if( l1.length || l2.length ) return l1.concat(l2);
    let i=0, j=0, arr=[];
   
    while( i < l1.length  ||  j < l2.length )
    {
        if(!l1[i] || !l2[j] ){
           arr.push(l1[i] || l2[j]);
           i++;
           j++; 
        }else{
            if( l1[i] <= l2[j] || !l2[i]){
                arr.push(l1[i]);
                i++;
            }else{
                arr.push(l2[j]);
                j++;
            }
        }
    }
    return arr;
};


console.log(mergeTwoLists([1, 2, 4], [1, 3, 4]))