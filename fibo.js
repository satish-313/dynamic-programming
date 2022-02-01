const fibo = (n) => {
  if (n <= 2) return 1;
  return fibo(n - 1) + fibo(n - 2);
};

// time complexity of fibo is O(2^n), space complexity is O(n)

console.log(fibo(6));
console.log(fibo(8));
console.log(fibo(9));
console.log(fibo(20));
console.log(fibo(40));
// console.log(fibo(50)); // take forever without dp 2^50

// any polynomial is bad for efficient another solution is used dynamic programing
// method for solving problem below one is memorisation approach

const memo_fibo = (n, memo = {}) => {
  if (n <= 2) return 1;
  if (n in memo) return memo[n];
  memo[n] = memo_fibo(n - 1, memo) + memo_fibo(n - 2, memo);
  return memo[n];
};

// time complexity O(n) && space complexity O(n)
console.log("with dp");
console.log(memo_fibo(6));
console.log(memo_fibo(8));
console.log(memo_fibo(9));
console.log(memo_fibo(20));
console.log(memo_fibo(40));
console.log(memo_fibo(50)); // take forever without dp 2^50
