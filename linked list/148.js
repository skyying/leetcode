
function merge(one, two){
  let dummy = new ListNode(0);
  let cur = dummy;

  while ( one && two ){
    if (one.val < two.val){
      cur.next = one;
      one = one.next;
    }else{
      cur.next = two;
      two = two.next;
    }
    cur = cur.next;
  }
  if(one) cur.next = one;
  if(two) cur.next = two;
  return dummy.next;
}

function sortList(head){
  if(!head || !head.next ){
    return head;
  }
  let fast = head;
  let slow = head;

  while(fast.next && fast.next.next){
    fast = fast.next.next
    slow = slow.next
  }
  let second = slow.next;
  slow.next = null;
  head = sortList(head)
  second = sortList(second);
  return merge(head, second);
}

