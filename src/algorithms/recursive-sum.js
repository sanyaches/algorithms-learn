export function sum(arr) {
  if (arr.length === 0) {
    return 0
  }

  return arr[0] + sum(arr.slice(1))
}

console.log('Recursive sum of [1,2,3,4] = ', sum([1,2,3,4]))
console.log('Recursive sum of [12] = ', sum([12]))
console.log('Recursive sum of [] = ', sum([]))
console.log('\n')