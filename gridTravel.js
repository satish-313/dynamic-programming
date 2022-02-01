/* 
  In the grid travel problem we are given a 2d grid on which we have to travel top
  left to bottom right. the problem is find out how many way we can travel.
  the condition is we can travel at a time down or right
*/

const gridMove = (row, col) => {
  // base condition if row is 1 and col is 1 return 1
  if (row === 1 && col === 1) return 1;

  // if row or col get less then 0 return 0
  if (row < 1 || col < 1) return 0;

  return gridMove(row - 1, col) + gridMove(row, col - 1);
};

// time complexity O(2^(m+n)) && space complexity O(n+m)
console.log(gridMove(1, 1));
console.log(gridMove(2, 3));
console.log(gridMove(3, 3));
console.log(gridMove(10, 10));
// console.log(gridMove(18, 18));

// using memorisation
const memo_gridMove = (row, col, memo = {}) => {
  let key = row + "," + col;
  if (key in memo) return memo[key];
  if (row === 1 && col === 1) return 1;
  if (row < 1 || col < 1) return 0;
  memo[key] =
    memo_gridMove(row - 1, col, memo) + memo_gridMove(row, col - 1, memo);
  return memo[key];
};

// time complexity O(m*n) && space complexity O(m+n)
console.log("using memo");
console.log(memo_gridMove(1, 1));
console.log(memo_gridMove(2, 3));
console.log(memo_gridMove(3, 3));
console.log(memo_gridMove(10, 10));
console.log(memo_gridMove(18, 18)); // take forever in recursion
