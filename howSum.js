/* 
  It is sequel of cansum. In can sum we find if any solution present in or not
  but here we return the all element used for that solution.

  if the no solution and return null
*/

const howsum = (targetSum, arr) => {
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  for (let ele of arr){
    let new_targetSum = targetSum - ele;
    let res = howsum(new_targetSum,arr)
    if( res !== null){
      return [...res,ele]
    }
  }

  return null
};

// time complexity O(n^m*m(for copy)) && space complexity O(m)
console.log(howsum(8,[5,3]))

const memo_howsum = (targetSum,arr,memo={}) => {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  for (let ele of arr){
    let new_targetSum = targetSum - ele
    let res = memo_howsum(new_targetSum,arr,memo);

    if(res !== null){
      memo[targetSum] = [...res,ele];
      return memo[targetSum]
    }
  }

  memo[targetSum] = null
  return null
}

// time complexity O(n*m^2) and space complexity O(m^2)
console.log("using memo")
console.log(memo_howsum(8,[3,5]))
console.log(memo_howsum(7,[2,3]))
console.log(memo_howsum(7,[5,3,4,7]))
console.log(memo_howsum(7,[2,4]))
console.log(memo_howsum(8,[2,3,5]))
console.log(memo_howsum(300,[7,14]))