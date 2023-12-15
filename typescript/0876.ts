export class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

export function middleNode(head: ListNode | null): ListNode | null | undefined {
  let fastRunner: ListNode | null | undefined = head
  let slowRunner: ListNode | null | undefined = head
  while (fastRunner?.next) {
    fastRunner = fastRunner?.next?.next
    slowRunner = slowRunner?.next
  }

  return slowRunner
}
