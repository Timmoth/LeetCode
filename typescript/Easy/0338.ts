export function countBits(n: number): number[] {
  let output = new Array()
  for (let i = 0; i <= n; i++) {
    let binaryNumber = i.toString(2)
    let binaryOneCount = 0
    for (let j = 0; j < binaryNumber.length; j++) {
      if (binaryNumber[j] == '1') {
        binaryOneCount++
      }
    }
    output.push(binaryOneCount)
  }

  return output
}
