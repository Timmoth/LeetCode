export function isValid(s: string): boolean {
  let index = 0
  let brackets: string[] = []
  while (index < s.length) {
    let c = s[index++]
    if (c == '[' || c == '{' || c == '(') {
      brackets.push(c)
      continue
    }

    let p = brackets.pop()
    if (
      (c == '}' && p == '{') ||
      (c == ']' && p == '[') ||
      (c == ')' && p == '(')
    ) {
      continue
    }

    return false
  }
  return brackets.length == 0
}
