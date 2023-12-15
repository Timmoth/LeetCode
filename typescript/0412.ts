export function fizzBuzz(n: number): string[] {
  let output: string[] = []

  for (let i = 1; i <= n; i++) {
    var val = ''
    if (i % 3 == 0) {
      val += 'Fizz'
    }

    if (i % 5 == 0) {
      val += 'Buzz'
    }

    if (val == '') {
      val = i.toString()
    }
    output[i - 1] = val
  }

  return output
}
