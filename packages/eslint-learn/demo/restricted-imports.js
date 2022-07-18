import lodash from 'lodash'

const arr = ['a', 'b', 'c']
const index = lodash.findIndex(arr, 'a')
console.log(index)
function checkEven(number) {
  if (number % 2 == 0) {
    return true
  }
  return false
}

checkEven(4)
