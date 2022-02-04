/* 
  It is the sequel of countConstruct. In countConstruct we calculate the all possible
  way. In here we return a 2d array of all solution
*/

const allconstruct = (targetWord, arr) => {
  if (targetWord === "") return [[]];

  let allresult = [];

  for (let ele of arr) {
    if (targetWord.indexOf(ele) === 0) {
      const newTarget = targetWord.slice(ele.length);
      const res = allconstruct(newTarget, arr);
      const newCollection = res.map((a) => [ele, ...a]);
      allresult.push(...newCollection);
    }
  }

  return allresult;
};

console.log(
  allconstruct("abcdef", ["ab", "abc", "cd", "def", "abcd", "ef", "cde", "f"])
);
// console.log(
//   allconstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])
// );
// console.log(
//   allconstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"])
// );
console.log(allconstruct("purple", ["pur", "ple", "purp", "le", "pu", "rple"]));
console.log(
  allconstruct("aaaaaaaaaaaaaaaaaaaaaaaaaaaz", [
    "a",
    "aa",
    "aaa",
    "aaaa",
    "aaaaa",
  ])
);

// implimenting memo don't solve or improve the worst case
// beause now time complexity alway polynomial

const memo_allconstruct = (targetWord, arr, memo = {}) => {
  if (targetWord in memo) return memo[targetWord];
  if (targetWord === "") return [[]];

  let allresult = [];

  for (let ele of arr) {
    if (targetWord.indexOf(ele) === 0) {
      const newTarget = targetWord.slice(ele.length);
      const res = allconstruct(newTarget, arr,memo);
      const newCollection = res.map((a) => [ele, ...a]);
      allresult.push(...newCollection);
    }
  }

  memo[targetWord] = allresult;
  return allresult;
};

console.log("memo")
console.log(
  memo_allconstruct("abcdef", ["ab", "abc", "cd", "def", "abcd", "ef", "cde", "f"])
);
// console.log(
//   allconstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])
// );
// console.log(
//   allconstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"])
// );
console.log(memo_allconstruct("purple", ["pur", "ple", "purp", "le", "pu", "rple"]));
console.log(
  memo_allconstruct("aaaaaaaaaaaaaaaaaaaaaaaaaaaz", [
    "a",
    "aa",
    "aaa",
    "aaaa",
    "aaaaa",
  ])
);
