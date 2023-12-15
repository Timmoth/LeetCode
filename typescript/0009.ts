export function isPalindrome(x: number): boolean {
  let str = x.toString()
  let start = 0
  let end = str.length - 1
  while (start < end) {
    if (str.charAt(start++) != str.charAt(end--)) return false
  }
  return true
}
