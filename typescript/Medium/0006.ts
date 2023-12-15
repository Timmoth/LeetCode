export function convert(s: string, numRows: number): string {
  if (numRows < 2) {
    return s
  }

  let outputMatix: string[] = []
  let columnLength = Math.ceil(s.length / (2 * numRows - 2))
  let lastRowIndex = numRows - 1
  let numCols = columnLength * lastRowIndex

  let inputIndex = 0
  let columnIndex = 0
  while (inputIndex < s.length) {
    let rowIndex = 0
    if (columnIndex % lastRowIndex == 0) {
      while (rowIndex < numRows && inputIndex < s.length) {
        outputMatix[rowIndex * numCols + columnIndex] = s.charAt(inputIndex++)
        rowIndex++
      }
    } else {
      while (rowIndex < numRows && inputIndex < s.length) {
        if (columnIndex % lastRowIndex == rowIndex) {
          outputMatix[(lastRowIndex - rowIndex) * numCols + columnIndex] =
            s.charAt(inputIndex++)
        }

        rowIndex++
      }
    }

    columnIndex++
  }

  return outputMatix.join('')
}
