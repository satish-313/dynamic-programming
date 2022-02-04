/* 
  It is sequel of canContruct. In which we will learn about how to count all the possible
  to cansturct the target word
*/

const countconstruct = (targetWord, arr) => {
  if (targetWord === "") return 1;
  let count = 0

  for (let word of arr) {
    if (targetWord.indexOf(word) === 0) {
      let new_word = targetWord.slice(word.length);
      let result = countconstruct(new_word, arr) 
      count += result
    }
  }

  return count;
};

// time complexity O(n^m) && space complexity O(m^2)
console.log(countconstruct("abcdef", ["ab", "abc", "cd", "def", "abcd","ef","cde"]));
console.log(
  countconstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])
);
console.log(
  countconstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o","t"])
);


const memo_countconstruct = (targetWord, arr, memo = {}) => {
  if (targetWord in memo) return memo[targetWord];
  if (targetWord === "") return 1;

  let count = 0;

  for (let word of arr) {
    if (targetWord.indexOf(word) === 0) {
      const new_target = targetWord.slice(word.length);
      const res = memo_countconstruct(new_target, arr, memo)
      count += res
    }
  }

  memo[targetWord] = count
  return count;
};

// time complexity O(m*n*m) && space complexity O(m^2)
console.log("memo")
console.log(memo_countconstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]));
console.log(
  memo_countconstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])
);
console.log(
  memo_countconstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o","t"])
);
console.log(
  memo_countconstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
    "e",
    "ee",
    "eee",
    "eeee",
    "eeeee",
    "eeeeee",
  ])
);