export function lengthOfLastWord(s: string): number {
  if (s.length == 0) {
    return 0
  }

  let start = -1
  for (let i = s.length - 1; i >= 0; i--) {
    let c = s[i]

    if (start == -1 && c != ' ') {
      start = i
    } else if (start >= 0 && c == ' ') {
      return start - i
    }
  }

  return start + 1
}
