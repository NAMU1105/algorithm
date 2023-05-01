/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  if (!list1) return list2;
  if (!list2) return list1;

  let tempNode = new ListNode();
  let currNode = tempNode;

  while (list1 && list2) {
    if (list1.val < list2.val) {
      currNode.next = list1;
      currNode = list1;
      list1 = list1.next;
    } else {
      currNode.next = list2;
      currNode = list2;
      list2 = list2.next;
    }
  }

  if (!list1) currNode.next = list2;
  if (!list2) currNode.next = list1;

  return tempNode.next;
};
