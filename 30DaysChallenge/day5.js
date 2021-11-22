// problem 1 - reverse a linked list
// solution - using a temp swap the values
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  var newHead = null;
  var tmp = null;
  while (head) {
    tmp = head.next;
    head.next = newHead;
    newHead = head;
    head = tmp;
  }
  return newHead;
};

// problem 2 - find middle element of a linked list
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
var mergeTwoLists = function (l1, l2) {
  var head = new ListNode(0);
  var now = head;
  var p1 = l1;
  var p2 = l2;
  while (p1 || p2) {
    if (p1 === null || (p2 !== null && p2.val < p1.val)) {
      now.next = p2;
      p2 = p2.next;
    } else {
      now.next = p1;
      p1 = p1.next;
    }
    now = now.next;
  }
  return head.next;
};

// problem 3 - merge two sorted linked list
function Node(data, next) {
  this.data = data;
  this.next = next;
}

function merge(L1, L2) {
  // create new linked list pointer
  var L3 = new Node(null, null);
  var prev = L3;

  // while both linked lists are not empty
  while (L1 !== null && L2 !== null) {
    if (L1.data <= L2.data) {
      prev.next = L1;
      L1 = L1.next;
    } else {
      prev.next = L2;
      L2 = L2.next;
    }
    prev = prev.next;
  }

  // once we reach end of a linked list, append the other
  // list because we know it is already sorted
  if (L1 === null) {
    prev.next = L2;
  }
  if (L2 === null) {
    prev.next = L1;
  }

  // return the sorted linked list
  return L3.next;
}

// create first linked list: 1 -> 3 -> 10
var n3 = new Node(10, null);
var n2 = new Node(3, n3);
var n1 = new Node(1, n2);
var L1 = n1;

// create second linked list: 5 -> 6 -> 9
var n6 = new Node(9, null);
var n5 = new Node(6, n6);
var n4 = new Node(5, n5);
var L2 = n4;

merge(L1, L2);

// problem 3 - Remove N-th node from back of LinkedList

// my solution
const removeNthFromEnd = (head, n) => {
  let curr = head;
  let counter = 0;
  while (curr.next !== null) {
    counter++;
  }

  curr = head;

  //   make the pointer on the node - 1 from the end
  for (let i = 0; i < counter - n - 1; i++) {
    curr.next = curr.next;
  }

  // remove the next node
  curr.next = curr.next.next;

  return head;
};

// online solution
var removeNthFromEnd = function (head, n) {
  let fast = head,
    slow = head;
  for (let i = 0; i < n; i++) fast = fast.next;
  if (!fast) return head.next;
  while (fast.next) (fast = fast.next), (slow = slow.next);
  slow.next = slow.next.next;
  return head;
};

// problem 4 - delete node in a linked list when the node is given
var deleteNode = function (node) {
  let curr = null;

  for (let i; i < node - 1; i++) {
    curr = curr.next;
  }

  curr = curr.next.next;
};
