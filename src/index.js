const binarySearch = (list, item) => {
  let low = 0, high = list.length - 1

  let iterationCounter = 0
  while(low <= high) {
    console.log('Iteration: ', ++iterationCounter)
    const mid = Math.floor((low + high) / 2)
    console.log('Middle index: ', mid, '\n')
    const guess = list[mid]

    if (guess === item) {
      return mid
    }

    if (guess > item) {
      high = mid - 1
    } else {
      low = mid + 1
    }
  }

  return null
}

console.log(binarySearch([1,2,5,6,9,12], 1))
