function findMaxIndex(arr) {
  let maxIndex = 0

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[maxIndex]) {
      maxIndex = i
    }
  }

  return maxIndex
}

export function selectionSortDesc(arr) {
  const sortedArr = []
  const sourceArr = [...arr]

  for (let i = 0; i < arr.length; i++) {
    const maxIndex = findMaxIndex(sourceArr)
    sortedArr.push(...sourceArr.splice(maxIndex, 1))
  }

  return sortedArr
}

console.log('Selection sort DESC [2,6,9,3,24,64,22,41,11,5] --> ', selectionSortDesc([2,6,9,3,24,64,22,41,11,5]))
console.log('\n')