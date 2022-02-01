/* 
  in the program we learn about the cansum. in which we are given an array and a target.
  Our goal is find the target by combine the array elements.
  we can reuse same element
*/

const cansum = (arr,target) => {
  if (target === 0) return true;
  if (target < 0) return false;

  for (let ele of arr){
    target = target - ele
    if(cansum(arr,target) === true){
      return true
    }
  }

  return false
}

arr = [2,3,4,5]
target = 11

// time complexity is O(n^m) && O(m) m = target, n = array length
console.log(cansum(arr,target))

const memo_cansum = (target,arr,memo={}) => {
  if (target in memo) return memo[target]
  if (target === 0) return true
  if (target < 0) return false

  for (let ele of arr){
    let new_target = target - ele
    if (memo_cansum(new_target,arr,memo) === true){
      memo[target] = true
      return true
    }
  }

  memo[target] = false
  return false
}

// time complexity O(m*n) && space complexity O(m)
console.log("using memo")
console.log(memo_cansum(7,[2,3]))
console.log(memo_cansum(7,[5,3,4,7]))
console.log(memo_cansum(7,[2,4]))
console.log(memo_cansum(8,[2,3,5]))
console.log(memo_cansum(300,[7,14]))

