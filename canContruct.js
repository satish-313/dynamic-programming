/* 
  In the program, we have to contruct the word from array of small words or letter
*/

const canconstruct = (targetWord, arr) => {
  if (targetWord === "") return true;

  for (let word of arr) {
    if (targetWord.indexOf(word) === 0) {
      let new_word = targetWord.slice(word.length);
      if (canconstruct(new_word, arr) === true) {
        return true;
      }
    }
  }

  return false;
};

// time complexity O(n^m*m) && space complexity O(m^2) m=target
console.log(canconstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]));
console.log(
  canconstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])
);
console.log(
  canconstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o"])
);
// console.log(
//   canconstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
//     "e",
//     "ee",
//     "eee",
//     "eeee",
//     "eeeee",
//     "eeeeee",
//   ])
// );

const memo_canconstruct = (targetWord, arr, memo = {}) => {
  if (targetWord in memo) return memo[targetWord];
  if (targetWord === "") return true;

  for (let word of arr) {
    if (targetWord.indexOf(word) === 0) {
      const new_target = targetWord.slice(word.length);
      if (memo_canconstruct(new_target, arr, memo) === true) {
        memo[targetWord] = true;
        return true;
      }
    }
  }

  memo[targetWord] = false;
  return false;
};

// time complexity O(m*n*m) && space complexity O(m^2)
console.log("memo")
console.log(memo_canconstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]));
console.log(
  memo_canconstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])
);
console.log(
  memo_canconstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o"])
);
console.log(
  memo_canconstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
    "e",
    "ee",
    "eee",
    "eeee",
    "eeeee",
    "eeeeee",
  ])
);