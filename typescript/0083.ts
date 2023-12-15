export class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

export function deleteDuplicates(head: ListNode | null): ListNode | null {
  let node = head
  while (node?.next != null) {
    if (node!.val == node.next.val) {
      node!.next = node.next.next
    } else {
      node = node.next
    }
  }

  return head
}
