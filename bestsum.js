/* 
  It is the sequel of howsum. In how sum we find the first solution return value
  but in bestsum we find all solution and compare and return best sum
*/

const bestsum = (target, arr) => {
  if (target === 0) return [];
  if (target < 0) return null;

  let bestSolution = null;

  for (let ele of arr) {
    const new_target = target - ele;
    const res = bestsum(new_target, arr);

    if (res !== null) {
      const new_res = [...res,ele]
      if (bestSolution === null || bestSolution.length > new_res.length) {
        bestSolution = new_res;
      }
    }
  }

  return bestSolution;
};

// time complexity O(n^m*m) && space complexity O(m^2)
console.log(bestsum(7,[5,3,4,7]))
console.log(bestsum(8,[2,3,5]))
console.log(bestsum(8,[1,4,5]))
// console.log(bestsum(100,[1,2,5,25]))

const memo_bestsum = (target, arr,memo={}) => {
  if (target in memo) return memo[target]
  if (target === 0) return [];
  if (target < 0) return null;

  let bestSolution = null;

  for (let ele of arr) {
    const new_target = target - ele;
    const res = memo_bestsum(new_target, arr,memo);

    if (res !== null) {
      const new_res = [...res,ele]
      if (bestSolution === null || bestSolution.length > new_res.length) {
        bestSolution = new_res;
      }
    }
  }

  memo[target] = bestSolution
  return bestSolution;
};

// time complexity O(n*m*m) && space complexity O(m^2)
console.log(memo_bestsum(7,[5,3,4,7]))
console.log(memo_bestsum(8,[2,3,5]))
console.log(memo_bestsum(8,[1,4,5]))
console.log(memo_bestsum(100,[1,2,5,25]))
