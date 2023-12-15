export function merge(
  nums1: number[],
  m: number,
  nums2: number[],
  n: number
): number[] {
  let num2Index = 0
  let q = new Array<number>()

  for (let i = 0; i < nums1.length; i++) {
    let currentVal = i < m ? nums1[i] : Number.MAX_VALUE

    if (nums2[num2Index] < currentVal) {
      if (q.length > 0 && q[0] < nums2[num2Index]) {
        nums1[i] = q.shift()!
      } else {
        nums1[i] = nums2[num2Index++]
      }

      q.push(currentVal)
    } else if (q.length > 0 && q[0] < currentVal) {
      nums1[i] = q.shift()!
      q.push(currentVal)
    }
  }

  return nums1
}
